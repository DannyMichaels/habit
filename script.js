console.clear();

/* setup (could also be a class or something... later) */
const state = {
  // could be called "app" or whatever you want
  user: 1, // just one pretend user right now
  habits: [], // an empty list for now
};

/* DOM */
const $habitList = document.querySelector('[rel="habit-outlet"]');

/* UTILITY */
function idMaker() {
  let counter = 1;
  // let country = habbitsArray.length ?
  return function () {
    return counter++;
  };
}
let generateHabitId = idMaker();
// REALLY... we'd use a real UID type thing...
const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");

/* RESOURCES */
class Habit {
  constructor(name) {
    this.name = name;
    this.id = toSnakeCase(this.name); // slug-style-id  "kabob case" ? or whatevers...
    this.checked = false;
    this.date = new Date();
  }
  toggle() {
    this.checked = !this.checked;
  }
}

// DATABASE (backend)
function initializeApp() {
  if (true) {
    state.habits = JSON.parse(localStorage.getItem("habits"));
  } else {
    state.habits = [];
  }
  renderHabits(); // initial render
}

function saveAll() {
  // https://www.w3schools.com/jsref/met_storage_setitem.asp
  localStorage.setItem("habits", JSON.stringify(state.habits));
}

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
  //getHabits returns state.habits inside it
  getHabits()
    .map(function (habit) {
      if (habit.id == id) {
        return (habit.checked = !habit.checked);
      }
      return habit;
    })
    .join("");
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

function seedApp() {
  /* basically  "SEED DATA" */
  addHabit("Do morning situps");

  addHabit("Do morning situps AGAIN");
  toggleHabit(2);
}

function deleteHabitButton(yes) {
  if (yes) {
    return "<button id='delete-this-habit'>DELETE ME :I</button>";
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

const renderHabits = () => {
  $habitList.innerHTML = state.habits
    .map((h) => {
      return renderHabit(h);
    })
    .join("");
};

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

// some dom stuff... that you'll reuse...
const $form = document.querySelector('[rel="form"]');
const $input = $form.querySelector("input");

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  if ($input.value.length) {
    addHabit($input.value);
    $input.value = "";
  }
});

/* run the program */
initializeApp();

/* tests */
// you could also write your own tests

/*

The goal: Build out the whole thing - fully functional / with NO UI (first)

1. Many of these things - need to get handled automatically: the "ID" should be generated somehow... (you'll need it - to remove habits etc)

2. there are a few ways to "construct" an object.... a "constructor" function / is common - and also the new "Class" in JS is good too... --- so, decide how to do that - and then the 'date' should get added... and the ID 

3. how do you remove a habit from the habits array? based on the ID? because - you aren't clicking anything.....


*/

/*

// find(habit).splice from array
(maybe)  BUT - do the things - in order of importance. (that's the most importnat thing to know about --- managing the time / and the level of importance)



OTHER WAYS THAN CLASS!

// way 1
function createHabit(name) { // what is needed? explicitly?
	// What would you say to Alexa?
	// he would input the name of the habit,
	return {
		id: state.lastId++, // for now?
		name: name,
		checked: false,
		date: new Date(),
	}; // this would return an object... / that's ONE way... 
} // "Function that returns an object"

// way 2
function ConstructThing(name) {
	this.id = state.lastId++;
	this.name = name;
	this.checked = false;
	this.date = new Date();
}
let exampleThing = new ConstructThing("Use a constructor function");
console.log(exampleThing);
// -------- "Constuctor function"


*/
