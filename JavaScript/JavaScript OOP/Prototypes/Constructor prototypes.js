//Object.getPrototypeOf(myObj);

//myObj._proto_(parent of Obj)
//Constructor.prototype()
function Circle (radius){
    this.radius = radius;
}


const circle1 = new Circle(1);
console.log(circle1);
console.log(Circle.prototype);

//They are the same circle1 === Circle.prototype
