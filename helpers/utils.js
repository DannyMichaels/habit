/* UTILITY */

const idMaker = () => () => Math.ceil(Math.random() * 100);

let generateHabitId = idMaker();

// REALLY... we'd use a real UID type thing...
const toSnakeCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("_");
