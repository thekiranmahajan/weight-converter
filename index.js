const weightInput = document.getElementById("weight-input");
const conversionOutput = document.querySelector(".conversion");
let timeout;
const convertKgToLbs = () => {
  if (weightInput.value <= 0 || isNaN(weightInput.value)) {
    conversionOutput.innerText = "❌Please! Enter a valid number.";
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      conversionOutput.innerText = "✅Please! Try again...";
      weightInput.value = "";
    }, 2000);
  } else {
    const weightInPounds = parseFloat(weightInput.value * 2.205).toFixed(2);
    conversionOutput.innerText = `Weight in ${weightInput.value}kg to ${weightInPounds}lbs`;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      conversionOutput.innerText = "Thank you for using🙏🏻";
      weightInput.value = "";
    }, 4000);
  }
};

weightInput.addEventListener("input", convertKgToLbs);
