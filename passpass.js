function button() {
    const char = 
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+><[]{}'"

    let textLength = 8;
    let text = '';

    for (let i = 0; i < textLength; i++) {
        let randomNumber = Math.floor(Math.random()
        * char.length);

        textd += char.substring(randomNumber,
        randomNumber + 1);
        console.log(text);
    }
    document.getElementById('text').value = text;

}