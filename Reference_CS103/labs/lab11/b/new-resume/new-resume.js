let age = document.getElementById("age");
let container = document.getElementById("container");
let output = document.getElementById("output");
let today  = new Date();

let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
let minute = today.getMinutes();
let time;
let suffix;

if(day < 10){
    day = "0" + day;
}
if(month < 10){
    month = "0" + month;
}
if(hour > 12){
    hour = hour - 12;
    suffix = "PM";
}else{
    suffix = "AM";
}
if(hour < 10){
    hour = "0" + hour;
}

time = hour + ':' + minute + suffix;

document.getElementById("time-date").innerHTML = `
<p>${time}</p>
<p>${day+'/'+month+'/'+year}</p>
`;

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

