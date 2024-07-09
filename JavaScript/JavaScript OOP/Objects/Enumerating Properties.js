function Circle(radius){
    this.radius = radius;
    this.draw = function(){
            console.log("draw");
    }
}

const circle = new Circle(10);
 
//To enumerate all the member in an object
for(let key in circle){
    if(typeof circle[key] !== 'function')
    console.log(key, circle[key]);
}

//To get all keys in an object
const keys = Object.keys(circle);
console.log(keys);

//To check for the existence of a property or a method
if('radius' in circle){
    console.log('Circle has a radius')
}