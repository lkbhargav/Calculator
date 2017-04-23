// JS methods goes in here

// triggered on keydown event
function keyPressed(element, e) {
    if(!validCalculatorKeys(e)) {
        e.preventDefault();
    }
    
    if(e.shiftKey && e.keyCode === 57) {
        e.preventDefault();
        buttonClicked("<input type='text' value='()' />");
    }
    
    if(e.keyCode === 13) {
        calculation(element);
    }
}

// concantenates the exisiting text field with new key pressed
function buttonClicked(ele) {
    $("#result").focus();
    let pos = getCursorPosition("result");
    if(pos.start === pos.end) {
        pos = pos.start;
    } else {
        $("#result").val($("#result").val().slice(0,pos.start)+$("#result").val().slice(pos.end,$("#result").val().length));
        pos = pos.start;
    }
    let calcInput = $("#result").val();
    
    let exText = calcInput.slice(0,pos);
    let reText = calcInput.slice(pos,calcInput.length);
    
    let IsExTextHasStar = true;
    let IsReTextHasStar = true;
    
    // adds * when user selects parenthesis 
    if($(ele).val() === "()") {
        if(exText !== "") {
            if(exText.charAt(pos-1) !== "*" && exText.charAt(pos-1) !== "+" && exText.charAt(pos-1) !== "-" && exText.charAt(pos-1) !== "/" && exText.charAt(pos-1) !== "(" && exText.charAt(pos-1) !== "%") {
                exText = exText + "*"
                IsExTextHasStar = false;
            }
        }
        
        if(reText !== "") {
            if(reText.charAt(0) !== "*" && reText.charAt(0) !== "+" && reText.charAt(0) !== "-" && reText.charAt(0) !== "/" && reText.charAt(0) !== ")" && reText.charAt(0) !== "%") {
                reText = "*" + reText;
                IsReTextHasStar = false;
            }        
        }
    }
    
    $("#result").val(exText+$(ele).val()+reText);
    
    // sets the cursor position, only if the caret position is not at index 0
    if(pos !== 0 && $(ele).val() !== "()") {
        if(pos+1 !== $("#result").val().length) { 
            setCursorPosition("result", pos+1);
        }
    } else {
        if((IsExTextHasStar && IsReTextHasStar) ||(IsExTextHasStar && !IsReTextHasStar)) {
            setCursorPosition("result", pos+1);
        } else {
            setCursorPosition("result", pos+2);
        }
    }
}

// Actual function to perform calculator functionality
function calculation(val) {
    let patt = new RegExp("[*/%-+()]");
    if(patt.test(val)) {
        $("#result").val("Found calc charecters");
    }
}

// filters out unwanted keys other than keys used in calculator
function validCalculatorKeys(e) {
    return (e.keyCode === 48 || ((e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 54 || e.keyCode === 55) && !e.shiftKey) || e.keyCode === 56 || e.keyCode === 53 || e.keyCode === 57 || (e.shiftKey && e.keyCode === 187) || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 106 || e.keyCode === 111 || e.keyCode === 8 || e.keyCode === 96 || e.keyCode === 97 || e.keyCode === 98 || e.keyCode === 99 || e.keyCode === 100 || e.keyCode === 101 || e.keyCode === 102 || e.keyCode === 103 || e.keyCode === 104 || e.keyCode === 105 || (!e.shiftKey && e.keyCode === 189) || e.keyCode === 37 || e.keyCode === 39 || e.keyCode === 110 || (!e.shiftKey && e.keyCode === 190) || e.keyCode === 46 || (!e.shiftKey && e.keyCode === 191));
}

// clears the input field
function clearKeyPressed() {
    $("#result").val("").focus();
}

function addition() {
    let sum = 0;
    for(let i=0; i<arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum;
}

function subraction() {
    let sub = arguments[0];
    for(let i=1; i<arguments.length; i++) {
        sub = sub - arguments[i];
    }
    return sub;
}

function multiplication() {
    let mul = arguments[0];
    for(let i = 1; i < arguments.length; i++) {
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
// Return: object with caret starting and ending position
function getCursorPosition(ele) {
    ele = document.getElementById(ele);
    return {"start":ele.selectionStart, "end":ele.selectionEnd};
}

// Parameters: element id and cursor position
function setCursorPosition(ele, pos) {
    ele = document.getElementById(ele);
    ele.selectionStart = pos;
    ele.selectionEnd = pos;
}