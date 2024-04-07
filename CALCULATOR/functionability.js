const display = document.getElementById("output")

function displayContent(input){
    display.value += input;
}

function clearOutput(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "I miss you"
    }
}