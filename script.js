console.clear();

/* setup (could also be a class or something... later) */
const state = {
  // could be called "app" or whatever you want
  user: 1, // just one pretend user right now
  habits: [], // an empty list for now
};

/* DOM */
const select = (element) => document.querySelector(element);

const habitList = select('[rel="habit-outlet"]');

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

const form = select('[rel="form"]');
const nameInput = form.querySelector("#name");
const typeCheckbox = form.querySelector("#type");
const submitButton = form.querySelector("button");

// function getDeleteButton() {
//   const deleteAllButton = select('[rel="delete-all"]');
//   if (state.habits.length) {
//     deleteAllButton.classList.toggle("active");
//   } else {
//     deleteAllButton.classList.toggle("inactive");
//   }
// }

// getDeleteButton();

// if (input.value.length) {
//   submitButton.classList.toggle("active");
// } else {
//   submitButton.classList.toggle("inactive");
// }

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value.length) {
    const createdHabit = {
      name: nameInput.value,
      type: typeCheckbox.value,
    };

    addHabit(createdHabit);
    input.value = "";
  }
});

/* run the program */
initializeApp();
