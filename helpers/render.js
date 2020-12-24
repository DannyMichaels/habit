/* RENDER */
function renderHabit(habit) {
  return `
		<li class='habit ${habit.checked ? "checked" : ""}' data-id='${habit.id}'>
			<habit-card>
				<input class='checkbox' type='checkbox' ${habit.checked ? "checked" : ""}>
        <h1 class='name'>${habit.name}</h1>&nbsp;${deleteHabitButton(
    habit.checked
  )}
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
