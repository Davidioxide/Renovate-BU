// this page is crerated by Ruohan (Kerry) Li
let today = new Date();
let hour = today.getHours();
let min = today.getMinutes();
let output;




if(hour<10){
    hour="0" + hour;
}


if(min<10){
    min="0" + min;
}


let numberHour=Number(hour)


if(0<numberHour && numberHour<=8) {
    output = "It is early in the morning, but you are welcome to take a look at what will fulfill your appetite for the day! "
}
else if (8 < numberHour && numberHour <= 13) {
    output = "It's time to look for a lunch place!"
}
else if (13 < numberHour && numberHour <= 21) {
    output = "It's time to look for a dinner place!"
}
else {
    output = "It is late in the night, but you are welcome to take a look at what will fulfill your appetite for tomorrow!"
}






document.getElementById("js").innerHTML=
    `
       <h1>${hour + ":" + min}</h1>
       <p>${output}</p>
   `
;

// Ruohan (Kerry) Li's portion finishes here