let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let output = document.getElementById("output");
let movingElement = document.getElementsByClassName("movingElement");
let main = document.getElementById("main");

function getInput(){
    return [Number(input1.value),Number(input2.value)];
}
function changeBackground(n){
    if(n < 0){
        output.style.color = "red";
    }else{
        output.style.color = "black";
    }
}
function doAdd(){
    let inputs = getInput();
    let result = inputs[0] + inputs[1];
    changeBackground(result);
    output.innerHTML = String(result);
}
function doMinus(){
    let inputs = getInput();
    let result = inputs[0] - inputs[1];
    changeBackground(result);
    output.innerHTML = String(result);
}
function doDivide(){
    let inputs = getInput();
    let result = inputs[0] / inputs[1];
    changeBackground(result);
    output.innerHTML = String(result);
}
function doMultiply(){
    let inputs = getInput();
    let result = inputs[0] * inputs[1];
    changeBackground(result);
    output.innerHTML = String(result);
}
function doExponential(){
    let inputs = getInput();
    let result = 1;
    for(let i = 0; i < inputs[1]; i++){
        result *= inputs[0];
    }
    changeBackground(result);
    output.innerHTML = String(result);
}
function clean(){
    input1.value = "";
    input2.value = "";
    output.innerHTML = "";
}

function randomProperty(){
    let randomRotate = Math.floor(Math.random() * 361);
    let randomFontSize = Math.floor(Math.random() * 7) + 3;
    let randomPositionTop = Math.floor(Math.random() * 100);
    let randomPositionLeft = Math.floor(Math.random() * 100);
    let randomOpacity = Math.random();
    return [randomRotate,randomFontSize,randomOpacity,randomPositionTop,randomPositionLeft];
}
function moveIt1(obj){
    let properties = randomProperty();

    obj.style.transform = `rotate(${properties[0]}deg)`;
    obj.style.fontSize = `calc(10px + ${properties[1]}vw)`;
    obj.style.opacity = `${properties[2]}`;
}
function moveIt2(obj){
    let properties = randomProperty();

    obj.style.top = `${properties[3]}%`;
    obj.style.left = `${properties[4]}%`;
}
let moveElementStyleKey;
let moveElementPositionKey;
main.addEventListener("mouseenter",() => {
    for(let i=0;i<movingElement.length;i++){
        moveIt1(movingElement[i]);
        moveIt2(movingElement[i]);
    }
    moveElementStyleKey = setInterval(()=>{
        for(let i=0;i<movingElement.length;i++){
            if(Math.random() >= 0.5){
                moveIt2(movingElement[i]);
            }
        }
    }, 5200);
    moveElementPositionKey = setInterval(()=>{
        for(let i=0;i<movingElement.length;i++){
            moveIt1(movingElement[i]);
        }
    }, 3000);
});
main.addEventListener("mouseleave",() => {
    clearInterval(moveElementStyleKey);
    clearInterval(moveElementPositionKey);
});