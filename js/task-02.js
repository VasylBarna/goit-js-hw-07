const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsArray = document.querySelector("#ingredients");

const elements = ingredients.map((e) => {
  const createList = document.createElement("li");
  createList.textContent = e;
  return createList;
});

ingredientsArray.append(...elements);
