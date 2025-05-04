const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    if (value) {
      display.value += value;
    }
  });
});

equals.addEventListener("click", () => {
  try {
    display.value = eval(display.value.replace(/÷/g, '/').replace(/×/g, '*'));
  } catch {
    display.value = "Error";
  }
});

clear.addEventListener("click", () => {
  display.value = "";
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (/[\d\+\-\*\/\.]/.test(key)) {
    display.value += key;
  } else if (key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key.toLowerCase() === "c") {
    display.value = "";
  }
});