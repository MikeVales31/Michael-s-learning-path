/**
 * Functions are objects in JavaScript 
 */

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
            console.log("draw");
    }
}

Circle.apply({},[1,2,3,4,5]);

//This are the same
Circle.call({},1);
const another = new Circle(1);