// DATABASE (backend)
function initializeApp() {
  const habits = localStorage.getItem("habits");
  if (habits) {
    state.habits = JSON.parse(habits);
  } else {
    state.habits = [];
  }
  renderHabits(); // initial render
}

function saveAll() {
  // https://www.w3schools.com/jsref/met_storage_setitem.asp
  localStorage.setItem("habits", JSON.stringify(state.habits));
}

function seedApp() {
  /* basically  "SEED DATA" */
  addHabit("Do morning situps");

  addHabit("Do morning situps AGAIN");
  toggleHabit(2);
}
