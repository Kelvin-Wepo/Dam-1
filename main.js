document.querySelector("#btn").addEventListener("click", welcomemessage);
function welcomemessage() {
    let entry = document.querySelector("#input").value
    let generatedElement = document.createElement("p");
    generatedElement.innerText = `hello ${entry} welcome to the bootcamp`
    document.querySelector('#demo').appendChild(generatedElement);
}