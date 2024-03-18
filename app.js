const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const conversionResult = document.getElementById("response");
let temp;

function convert() {
  if (toFahrenheit.checked) {
    temp = Number(textBox.value);
    temp = (temp * 9) / 5 + 32;
    conversionResult.textContent = temp.toFixed(1) + "°F";
  } else if (toCelsius.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    conversionResult.textContent = temp.toFixed(1) + "°C";
  } else {
    conversionResult.textContent = "Select A Unit";
  }
}
