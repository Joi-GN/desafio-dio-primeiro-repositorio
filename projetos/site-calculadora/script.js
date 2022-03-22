var display = document.querySelector('#display');

function showDisplay(value){
    if(value == "."){
        display.value = "0";
    }
    display.value+=value;
}

