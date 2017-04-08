// JS methods goes in here

// filters out unwanted keys other than keys used in calculator
function keyPressed(element, e) {
    if(!(e.keyCode === 48 || e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 53 || e.keyCode === 54 || e.keyCode === 55 || e.keyCode === 56 || e.keyCode === 57 || e.shiftKey || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 106 || e.keyCode === 111)) {
        e.preventDefault();
    }
    
    if(e.keyCode === 13) {
        calculation(element);
    }
}

function buttonClicked(ele) {
    $("#result").val($("#result").val()+$(ele).val());
}

function calculation(ele) {
    
}