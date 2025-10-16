const myArray = [];


function addFavorite(){
    myArray.push(document.getElementById("inputFavorite").value);
    document.getElementById("inputFavorite").value = "";
}
function revealFavorite(){
    let output = document.getElementById("output");
    output.innerHTML = "";
    for(let i = 0;i<myArray.length;i++){
        let temp = document.createElement("li");
        temp.textContent = myArray[i];
        output.appendChild(temp);
    }
}