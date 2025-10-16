let age = document.getElementById("age");
let container = document.getElementById("container");

function authentification(){
    if(age.value>17){
        container.style.visibility = "visible";
    }
}