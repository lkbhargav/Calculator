// JS methods goes in here

// triggered on keydown event
function keyPressed(element, e) {
    if(!validCalculatorKeys(e)) {
        e.preventDefault();
    }
    
    if(e.keyCode === 13) {
        calculation(element);
    }
}

// concantenates the exisiting text field with new key pressed
function buttonClicked(ele) {
    $("#result").val($("#result").val()+$(ele).val());
}

// Actual function to perform calculator functionality
function calculation(ele) {
    
}

// filters out unwanted keys other than keys used in calculator
function validCalculatorKeys(e) {
    return (e.keyCode === 48 || ((e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 54 || e.keyCode === 55) && !e.shiftKey) || e.keyCode === 56 || e.keyCode === 53 || e.keyCode === 57 || (e.shiftKey && e.keyCode === 187) || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 106 || e.keyCode === 111 || e.keyCode === 8 || e.keyCode === 96 || e.keyCode === 97 || e.keyCode === 98 || e.keyCode === 99 || e.keyCode === 100 || e.keyCode === 101 || e.keyCode === 102 || e.keyCode === 103 || e.keyCode === 104 || e.keyCode === 105 || (!e.shiftKey && e.keyCode === 189));
}

// clears the input field
function clearKeyPressed() {
    $("#result").val("");
}