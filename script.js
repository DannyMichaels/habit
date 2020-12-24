console.clear();

/* setup (could also be a class or something... later) */
const state = {
  // could be called "app" or whatever you want
  user: 1, // just one pretend user right now
  habits: [], // an empty list for now
};

/* DOM */
const habitList = document.querySelector('[rel="habit-outlet"]');

// ACTIONS
function logState() {
  console.log("State: ", state);
}

function addHabit(name) {
  // $todo -> Make sure there are no duplicates?

  if (!name) {
    console.log("No name added / return");
    return;
  }
  state.habits.push(new Habit(name));
  logState();
  renderHabits();
  saveAll();
}

function getHabits() {
  return state.habits;
}

function getHabit(id) {
  return getHabits(state).find(function (habit) {
    return habit.id == id;
  });
}

function clearHabits() {
  let answer = confirm("Are you sure?");
  if (answer == true) {
    state.habits = [];
    saveAll();
    renderHabits();
  }
}

function toggleHabit(id) {
  getHabits().map((habit) => {
    if (habit.id == id) {
      return (habit.checked = !habit.checked);
    }
    return habit;
  });
  logState();
  renderHabits();
  saveAll();
}

function removeHabit(id) {
  let allButThisOne = getHabits(state).filter(function (habit) {
    return habit.id !== id;
  });
  state.habits = allButThisOne;
  logState();
  renderHabits();
  saveAll();
}

function editHabit(id) {
  // $todo
}

function deleteHabitButton(yes) {
  if (yes) {
    return "<button id='delete-this-habit'>DELETE ME :I</button>";
  } else {
    return "";
  }
}

/* RENDER */
function renderHabit(habit) {
  return `
		<li class='habit ${habit.checked ? "checked" : ""}' data-id='${habit.id}'>
			<habit-card>
				<input class='checkbox' type='checkbox' ${habit.checked ? "checked" : ""}>
				<h1 class='name'>${habit.name}</h1>&nbsp; ${deleteHabitButton(habit.checked)}
			</habit-card>
		</li>
	`;
}

const renderHabits = () =>
  (habitList.innerHTML = state.habits.map((habit) => renderHabit(habit)));

// WAY 1: items.map(function (item) {});
// WAY 2: items.map((item) => {});

/* EVENT DELEGATION */
document.addEventListener("click", (event) => {
  if (event.target.matches("input.checkbox")) {
    let clicked = event.target.closest("li").dataset.id;
    console.log(clicked);
    toggleHabit(clicked);
  }

  if (event.target.matches("#delete-all-habits")) {
    clearHabits();
  }
  if (event.target.matches("#delete-this-habit")) {
    let id = event.target.closest("li").dataset.id;
    console.log("noo you deleted me :(", id);
    removeHabit(id);
  }
});

const form = document.querySelector('[rel="form"]');
const input = form.querySelector("input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value.length) {
    addHabit(input.value);
    input.value = "";
  }
});

/* run the program */
initializeApp();
