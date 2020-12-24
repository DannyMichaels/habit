class Habit {
  constructor(name) {
    this.name = name;
    this.id = toSnakeCase(this.name) + generateHabitId(); // from utils.js
    this.checked = false;
    this.date = new Date();
  }
  toggle() {
    this.checked = !this.checked;
  }
}
