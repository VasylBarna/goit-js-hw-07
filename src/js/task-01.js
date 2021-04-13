const allCategories = document.querySelectorAll("li.item");
console.log(`В списке ${allCategories.length} категории.`);

allCategories.forEach((e) => {
  console.log(`Категория: ${e.firstElementChild.textContent}`);
  console.log(`Количество елементов: ${e.childNodes[3].children.length}`);
});