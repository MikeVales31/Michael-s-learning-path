function Circle (radius){
    //Instance members
    this.radius = radius;
    this.move = function(){
        console.log('move');
    }
}

const circle1 = new Circle(1);

// Prototype members
Circle.prototype.draw = function(){
    console.log("draw");
}

//object.keys returns instance members
console.log(Object.keys(circle1));

//for in loop returns all members(instance and prototypes)
for(let key in circle1) console.log(key);