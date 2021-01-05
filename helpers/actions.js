// ACTIONS
function logState() {
  console.log("State: ", state);
}

function addHabit(formData) {
  // $todo -> Make sure there are no duplicates?

  if (!formData) {
    console.log("No name added / return");
    return;
  }
  state.habits.push(new Habit(formData));
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
  let habitToEdit = getHabits(state).find((habit) => habit.id === id);
  if (habitToEdit) {
    const inputElement = document.getElementById(`edit-input-field-${id}`);
    inputElement.classList.remove("inactive");
    inputElement.value = habitToEdit.name;
  }
}

function saveHabit(id) {
  let editedHabitIndex = getHabits(state).findIndex((habit) => habit.id === id);
  if (editedHabitIndex > -1) {
    const nameElement = document.getElementById(`habit-name-${id}`);
    const inputElement = document.getElementById(`edit-input-field-${id}`);
    if (inputElement.value) {
      const updatedHabit = {
        ...state.habits[editedHabitIndex],
        name: inputElement.value,
      };
      state.habits.splice(editedHabitIndex, 1, updatedHabit);
      nameElement.innerText = updatedHabit.name;
      saveAll();
    }
    inputElement.classList.add("inactive");
  }
}

function cancelEdit(id) {
  const inputElement = document.getElementById(`edit-input-field-${id}`);
  inputElement.value = "";
  inputElement.classList.add("inactive");
}

function deleteHabitButton(yes) {
  if (yes) {
    return "<button id='delete-this-habit'><i class='fa fa-close'></i> Delete</button>";
  } else {
    return "";
  }
}
