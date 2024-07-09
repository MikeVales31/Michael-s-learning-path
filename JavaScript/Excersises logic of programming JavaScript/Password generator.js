//Copy and paste in the browser console

const generate = () =>{

    let size = prompt("How many characters do you want?");
    let capitalLetters = prompt("Do you want capital letters?");
    let numbers = prompt("Do you want numbers?");
    let specialCharacters = prompt("Do you want special characters?");
    let password = "";
    let characters = `abcdefghijklmnopqrstuvwxyz`;

    if(capitalLetters === "yes"){
        characters = characters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if(numbers === "yes"){
        characters = characters + "0987654321";
    }

    if(specialCharacters === "yes"){
        characters = characters + `"!#@$%&/()`;
    }

    for (let i = 0; i < size; i++){
        password = password + characters[Math.trunc(Math.random()*characters.length)]
    }

    return password;
}

generate();  