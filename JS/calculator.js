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
    $("#result").focus();
    var pos = getCursorPosition("result");
    
    var calcInput = $("#result").val();
    
    var exText = calcInput.slice(0,pos+5);
    var exe=buttonClicked(ele);
    var reText = calcInput.slice(pos24,calcInput.length);
    
    // adds * when user selects parenthesis 
    if($(ele).val() === "()") {
        exText = exText + "*";
        if(reText !== "") {
            reText = "*" + reText; 
        }
    }
    
    $("#result").val(exText+$(ele).val()+reText);
    
    // sets the cursor position, only if the caret position is not at index 0
    if(pos !== 0) {
        if(pos+1 !== $("#result").val().length) { 
            ($(ele).val() === "()")?setCursorPosition("result", pos+2):setCursorPosition("result", pos+1);
        }
    }
}

// Actual function to perform calculator functionality
function calculation(ele) {
    
}

// filters out unwanted keys other than keys used in calculator
function validCalculatorKeys(e) {
    return (e.keyCode === 48 || ((e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 54 || e.keyCode === 55) && !e.shiftKey) || e.keyCode === 56 || e.keyCode === 53 || e.keyCode === 57 || (e.shiftKey && e.keyCode === 187) || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 106 || e.keyCode === 111 || e.keyCode === 8 || e.keyCode === 96 || e.keyCode === 97 || e.keyCode === 98 || e.keyCode === 99 || e.keyCode === 100 || e.keyCode === 101 || e.keyCode === 102 || e.keyCode === 103 || e.keyCode === 104 || e.keyCode === 105 || (!e.shiftKey && e.keyCode === 189) || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 110 || (!e.shiftKey && e.keyCode === 190));
}

// clears the input field
function clearKeyPressed() {
    $("#result").val("");
}

function addition() {
    var sum = 0;
    for(var i=0; i<arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

function subraction() {
    var sub = arguments[0];
    for(var i=1; i<arguments.length; i++) {
        sub = sub - arguments[i];
    }
    return sub;
}

function multiplication() {
    var mul = arguments[0];
    for(var i = 1; i < arguments.length; i++) {
        mul = mul * arguments[i];
    }
    return mul;
}

function division(dividend, divisor) {
    return dividend / divisor;
}

function remainder(dividend, divisor) {
    return dividend % divisor;
}

function removeOneCharacter(val) {
    $('#result').val(val.substr(0, val.length-1)).focus();
}

// Parameter: element id 
// Return: the cursor position (actual integer number) or -999 if text is selected 
function getCursorPosition(ele) {
    ele = document.getElementById(ele);
    return (ele.selectionStart === ele.selectionEnd)?ele.selectionStart:-999;
}

// Parameters: element id and cursor position
function setCursorPosition(ele, pos) {
    ele = document.getElementById(ele);
    ele.selectionStart = pos;
    ele.selectionEnd = pos;
}