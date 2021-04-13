const typingInInput = document.querySelector("#validation-input");

typingInInput.addEventListener("blur", () => {
  typingInInput.value.length === Number(typingInInput.dataset.length)
    ? typingInInput.classList.add("valid")
    : typingInInput.classList.add("invalid");
});
typingInInput.addEventListener("focus", () => {
  typingInInput.classList.remove("valid");
  typingInInput.classList.remove("invalid");
  console.log(typingInInput);
});
