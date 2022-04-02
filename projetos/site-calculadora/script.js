var display = document.querySelector('#display');

function showDisplay(value){
    if(value == "."){
        display.value = "0";
    }
    display.value+=value;
}

function clearAll(){
    display.value = "";
}

function result(){
    let x = eval(display.value);
    display.value = x;

    if(display.value == "undefined"){
        display.value = "";
    }
}
