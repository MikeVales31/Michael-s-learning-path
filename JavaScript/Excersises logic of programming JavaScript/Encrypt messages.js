//Check in the browser console

const encrypt = () => {
    let alphabet = "abcdefghijklmnñopqrstuvwxyz";
    let message = prompt("Enter the message you want to encrypt");
    let displacement = Number(prompt("Enter the displacement required"));
    let result = "";

    for(let i=0; i<message.length; i++){
        let actualPosition = alphabet.indexOf(message[i]);
        let desiredPosition = actualPosition + displacement;
        let newPosition = desiredPosition < alphabet.length ? desiredPosition: desiredPosition%alphabet.length;
        let letter = alphabet[newPosition];

        result += letter;
    }
    return result;
}

console.log(encrypt());
