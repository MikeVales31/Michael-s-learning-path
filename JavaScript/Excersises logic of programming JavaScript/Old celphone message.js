let numPad = {
    0: " ",
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
}

const searchNumber = letter => {
    let numbers =  Object.keys(numPad);
    let result = "";

    numbers.forEach(num => {
        for(let i = 0; i < numPad[num].length; i++){
        if(letter === numPad[num][i]){
            for(let j = 0; j <= i; j++){
                result = `${result}${num}`;
               }
            }
        }
    })
    return result;
}

const convertText = text =>{
    let answer = "";
    for(let i = 0; i < text.length; i++){
        answer += searchNumber(text[i]);
    }
    return answer;
}

console.log(convertText("hi world"));