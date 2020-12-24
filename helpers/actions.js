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