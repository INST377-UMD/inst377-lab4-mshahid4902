function alertName(event) {
    event.preventDefault();
    let nameInput = document.getElementById("name");
    let name = nameInput.value;

    if (name.trim() === "") alert("Please enter your name."); 
    else alert("Hi " + name + "!");
    
    nameInput.value = "";
}

let isBlue = true;
function changeColor() {
    if (isBlue) document.body.style.backgroundColor = "green";
    else document.body.style.backgroundColor = "lightblue"

    isBlue = !isBlue;
}

function validateText(event) {
    event.preventDefault();
    let textInput = document.getElementById("textInput");
    let text = textInput.value;

    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (validation.test(text)) alert("no special characters plz");

    textInput.value = "";

}

function addText() {
    let heading = document.getElementById("main-heading");
    heading.innerText += " - Adding Text (wow)";
}