const inputSizeControl = document.querySelector("#font-size-control");
const textChange = document.querySelector("#text");

inputSizeControl.addEventListener("input", onInputChange);
function onInputChange() {
  textChange.style.fontSize = inputSizeControl.value + "px";
}
