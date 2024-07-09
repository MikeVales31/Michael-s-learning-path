// Map Example
const arr = [1,2,3,4,2,2,3,4,1];
const countNumber = new Map ();


for (let num of arr){
    if(countNumber.get(num) === undefined){
        countNumber.set(num,1);
    }
    else {
        countNumber.set(num,countNumber.get(num) + 1);
    }
}

console.log(countNumber);
