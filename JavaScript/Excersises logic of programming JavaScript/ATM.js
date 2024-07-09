const available = {
    100: 3,
    50: 6,
    20: 10,
    10: 50,
    1: 50
}

const money = Object.keys(available);

const totalAvailable = () => {
    let total = 0;
    for (let i = 0; i < money.length; i++){
        total += money[i] * available[money[i]];
    }
    return total;
}
const calculateMoney = (moneyToRetire, denomination) =>{
    let counter = moneyToRetire/denomination;
    if(counter > available[denomination]){
        counter = available[denomination];
    }
    available[denomination] -= counter;
    return counter;
} 

const process = (valueToRetire) => {
    if(valueToRetire > totalAvailable){
        console.log("There is not enough money");
    }

    let moneyToRetire = valueToRetire;
    while(moneyToRetire > 0){
        let counter = 0;
        for (let i = 0; i < money.length; i++){
            counter = calculateMoney(moneyToRetire, money[i]);
            console.log(`There are ${counter} of ${money[i]} dollars`);
            moneyToRetire -= counter * money[i];
        }
    }
}


process(1350);