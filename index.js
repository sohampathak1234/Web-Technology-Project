// Variables
const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

// For each
buttons.forEach(function (button) {
    button.addEventListener("click", calculate);
});

// Functions
function calculate(event) {
    const clickedButtonValue = event.target.value;
    try {
        if (clickedButtonValue === "=") {
            if (display.value !== "") {
                display.value = eval(display.value);
            }
        } else if (clickedButtonValue === "C") {
            display.value = "";
        } else if (clickedButtonValue === "sqrt") {
            const currentValue = parseFloat(display.value);
            if (currentValue >= 0) {
                display.value = Math.sqrt(currentValue);
            } else {
                alert("Error: Cannot take square root of a negative number");
            }
        } else if (clickedButtonValue === "clear") {
            display.value = display.value.slice(0,-1);
        } else {
            display.value += clickedButtonValue;
        }
    } catch (error) {
        alert("Error!");
    }

}
