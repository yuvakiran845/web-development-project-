const display = document.getElementById("display");

function append(char) {
  display.value += char;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }}
function Delete(){
display.value="";
}

// Keyboard support
document.addEventListener("keydown", function (e) {
  const key = e.key;
  if ("0123456789+-*/.%".includes(key)) {
    append(key);
  } else if (key === "Enter") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    backspace();
  } else if (key === "Escape") {
    clearDisplay();
  }
});