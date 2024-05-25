const display = document.getElementById("output");
let prevNum = "";
let prevModu = "";
let prevEval = "";

function Modulus(input) {
    prevModu = input;
    display.value += input;
    prevNum = "";  // Reset prevNum for the next number
}

function displayContent(input) {
    prevNum += input;  // Accumulate digits
    display.value += input;
}

function clearOutput() {
    display.value = "";
    prevNum = "";
    prevModu = "";
    prevEval = "";
}

function calculate() {
    if (eval(display.value) == eval(prevEval)) {
        display.value += prevModu + prevNum;
        display.value = eval(display.value);
    } else {
        try {
            display.value = eval(display.value);
            prevEval = display.value;
        } catch (error) {
            display.value = "Error";
        }
    }
}

function ClickA() {
    // Define this function if needed
}