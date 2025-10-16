let age = document.getElementById("age");
let container = document.getElementById("container");
let output = document.getElementById("output");

function authentification(){
    let checkTarget = age.value;
    if(isNaN(checkTarget)){
        output.style.display = "block";
        output.innerHTML = "Enter a valid number (entered a value of other type)";
        container.style.visibility = "hidden";
    }else if(checkTarget < 0){
        output.style.display = "block";
        output.innerHTML = "Enter a valid number (entered a value lower than minimal possible value)";
        container.style.visibility = "hidden";
    }else if(checkTarget % 1 !== 0){
        output.style.display = "block";
        output.innerHTML = "Enter a valid number (entered a value of decimal)";
        container.style.visibility = "hidden";
    }else if(checkTarget <= 120 && checkTarget >= 18){
        output.style.display = "none";
        container.style.visibility = "visible";
    }else{
        output.style.display = "block";
        output.innerHTML = "You may not see the content";
        container.style.visibility = "hidden";
    }
}