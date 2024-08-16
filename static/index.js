
const textbox =document.getElementById("textbox");
const feranheit =document.getElementById("feranheit");
const celsius =document.getElementById("celsius");
const result =document.getElementById("result");
let temp;

function convert(){

    if(feranheit.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1)  + "°f";
    }
    else if(celsius.checked){
            temp = Number(textbox.value);
            temp = (temp - 32) * (5/9);
            result.textContent = temp.toFixed(1)  + "°c";
    }
    else{
        result.textContent = "select a unit";
    }
}