/* RENDER */
function renderHabit(habit) {
  return `
		<li class='habit ${habit.checked ? "checked" : ""}' data-id='${habit.id}'>
			<habit-card>
        <input class='checkbox' type='checkbox' ${
          habit.checked ? "checked" : ""
        }>

        <input id="edit-input-field-${
          habit.id
        }" class='edit-text inactive' type='text' >

        <h1 class='name' id="habit-name-${habit.id}">${
    habit.name
  }</h1>&nbsp;${deleteHabitButton(habit.checked)}
  <button onclick="editHabit('${habit.id}')">Edit</button>
  <button onclick="saveHabit('${habit.id}')">Save</button>
  <button onclick="cancelEdit('${habit.id}')">Cancel</button>

        <!-- <h1 class='date'>${habit.date}</h1>&nbsp -->
			</habit-card>
		</li>
	`;
}

const renderHabits = () => {
  habitList.innerHTML = state.habits
    .map((habit) => renderHabit(habit))
    .join("");
};

// WAY 1: items.map(function (item) {});
// WAY 2: items.map((item) => {});
