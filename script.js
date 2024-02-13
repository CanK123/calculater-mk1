const display = document.getElementById("display");
const DisplayObj = {
    pipeline: "",
    active: false,
    activeButtonArr: [],
    bool: false,
}
function set3Click(element){
    if((display.textContent === "0" && element !== '.') || DisplayObj.bool === true ){
        display.textContent = "";
        DisplayObj.bool = false;
    }
    else if(display.textContent.includes('.') && element === '.' ){
        return;
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
        DisplayObj.activeButtonArr[0].style.border = "black 0.5px solid";
        DisplayObj.activeButtonArr.pop();
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
        display.textContent = (display.textContent / 100).toPrecision(2);
    }
}
function operatorClick(button, operator){
    if(DisplayObj.active === false){
        DisplayObj.pipeline = display.textContent + operator;
        display.textContent = 0;
        DisplayObj.active = true;
        button.style.border = "3px solid black";
        DisplayObj.activeButtonArr.push(button);
    }
    else if(DisplayObj.active === true){
        DisplayObj.activeButtonArr[0].style.border = "black 0.5px solid";
        DisplayObj.activeButtonArr.pop();
        equalsClick();
        button.style.border = "3px solid black";
        DisplayObj.activeButtonArr.push(button);
        DisplayObj.pipeline = display.textContent + operator;
        DisplayObj.active = true;
        DisplayObj.bool = true;        
    }
}
function equalsClick(){
    if(DisplayObj.activeButtonArr.length !== 0){
        DisplayObj.activeButtonArr[0].style.border = "black 0.5px solid";
        DisplayObj.activeButtonArr.pop();
    }
    display.textContent = eval(DisplayObj.pipeline + display.textContent);
    DisplayObj.active = false;
    DisplayObj.pipeline = "";
    DisplayObj.bool = true;
}