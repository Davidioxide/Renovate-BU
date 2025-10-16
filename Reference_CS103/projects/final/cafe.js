// This page is created by Madison Kim
let output = document.getElementById("output");


let cafe1_name = "Cafe Weekend";
let cafe1_tag1 = "cozy";
let cafe1_tag2 = "dessert";
let cafe1_tag3 = "brunch";




let cafe2_name = "Caffe Nero";
let cafe2_tag1 = "study";
let cafe2_tag2 = "cozy";
let cafe2_tag3 = "coffee";


let cafe3_name = "Blank Street Coffee";
let cafe3_tag1 = "cozy";
let cafe3_tag2 = "matcha";


function filterCafes(tag) {
    let result = "";



    if (tag === "all") {
        result = result + cafe1_name + "<br>";
    }
    if (tag === cafe1_tag1) {
        result = result + cafe1_name + "<br>";
    }
    if (tag === cafe1_tag2) {
        result = result + cafe1_name + "<br>";
    }
    if (tag === cafe1_tag3) {
        result = result + cafe1_name + "<br>";
    }



    if (tag === "all") {
        result = result + cafe2_name + "<br>";
    }
    if (tag === cafe2_tag1) {
        result = result + cafe2_name + "<br>";
    }
    if (tag === cafe2_tag2) {
        result = result + cafe2_name + "<br>";
    }
    if (tag === cafe2_tag3) {
        result = result + cafe2_name + "<br>";
    }



    if (tag === "all") {
        result = result + cafe3_name + "<br>";
    }
    if (tag === cafe3_tag1) {
        result = result + cafe3_name + "<br>";
    }
    if (tag === cafe3_tag2) {
        result = result + cafe3_name + "<br>";
    }


    output.innerHTML = result;
}
// This page is created by Madison kim