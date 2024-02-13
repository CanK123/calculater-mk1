const display = document.getElementById("display");
const DisplayObj = {
    pipeline: "",
    active: false,
}
function set3Click(element){
    if(display.textContent == 0){
        display.textContent = "";
    }
    display.textContent += element;
}
function clearClick(){
    if(DisplayObj.active === false){
        display.textContent = "0";
    }
    else if(DisplayObj.active === true && display.textContent == 0){
        DisplayObj.active = false;
        DisplayObj.pipeline = "";
    }
    else{
        display.textContent = "0"
    }
}
function plusMinusClick(){
    if(display.textContent == 0){
        return;
    }
    else if(display.textContent.includes("-")){
        display.textContent = display.textContent.replace("-", "");
    }
    else{
        display.textContent = "-" + display.textContent;
    }
}
function percentClick(){
    if(display.textContent == 0){
        return;
    }
    else{
        display.textContent = display.textContent / 100;
    }
}