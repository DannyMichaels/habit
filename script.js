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
const input = form.querySelector("input");

function getDeleteButton() {
  const deleteAllButton = select('[rel="delete-all"]');
  if (getHabits().length > 0) {
    deleteAllButton.classList.toggle("active");
  } else {
    deleteAllButton.classList.toggle("inactive");
  }
}

getDeleteButton();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (input.value.length) {
    addHabit(input.value);
    input.value = "";
  }
});

/* run the program */
initializeApp();
