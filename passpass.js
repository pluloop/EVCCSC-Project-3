var  buttonId = document.getElementById("button");

function button() {
    const char = 
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+><[]{}'"

    let textLength = 8;
    let text = '';

    for (let i = 0; i < textLength; i++) {
        let randomNumber = Math.floor(Math.random()
        * char.length);

        text += char.substring(randomNumber,
        randomNumber + 1);
        console.log(text);
    }
    document.getElementById("text-input").value = text;

}

buttonId.addEventListener("click", button);