class Habit {
  constructor(name) {
    this.name = name;
    this.id = toSnakeCase(this.name) + generateHabitId(); // slug-style-id  "kabob case" ? or whatevers...
    this.checked = false;
    this.date = new Date();
  }
  toggle() {
    this.checked = !this.checked;
  }
}
