const counter = {
  value: 0,
  increment() {
    console.log("increment", this);
    this.value += 1;
  },
  decrement() {
    console.log("decrement", this);
    this.value -= 1;
  },
};

const decrementBtn = document.querySelector('[data-action = "decrement"]');
console.log(decrementBtn);

const incrementBtn = document.querySelector('[data-action = "increment"]');
console.log(incrementBtn);

const counterValue = document.querySelector("#value");
console.log(counterValue);

decrementBtn.addEventListener("click", function () {
  console.log("Click on decrement");
  counter.decrement();
  console.log(counter);

  counterValue.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  console.log("Click on increment");
  counter.increment();
  console.log(counter);

  counterValue.textContent = counter.value;
});
