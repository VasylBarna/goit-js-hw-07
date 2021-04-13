const inputNumber = document.querySelector("input");
const creatItemsBtn = document.querySelector('[data-action = "render"]');
const clearItemsBtn = document.querySelector('[data-action = "destroy"]');
const boxesArray = document.querySelector("#boxes");

creatItemsBtn.addEventListener("click", createBoxes);

function createBoxes() {
  const itemSizeBox = 30;
  for (let i = 0; i <= inputNumber.value; i += 1) {
    const itemColorBox = 256;
    let redBox = Math.floor(Math.random() * itemColorBox);
    let greenBox = Math.floor(Math.random() * itemColorBox);
    let blueBox = Math.floor(Math.random() * itemColorBox);

    const newBox = document.createElement("div");

    newBox.classList.add("newBox");
    newBox.style.width = `${itemSizeBox + i * 10}px`;
    newBox.style.height = `${itemSizeBox + i * 10}px`;
    newBox.style.backgroundColor = `rgb(${redBox}, ${greenBox}, ${blueBox})`;

    boxesArray.append(newBox);
  }
}

clearItemsBtn.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  //   boxesArray.innerHTML = "";

  clearItemsBtn.addEventListener("click", () => {
    inputNumber.querySelectorAll("div").forEach((item) => item.remove());
  });
  // inputNumber.value = "";
}
