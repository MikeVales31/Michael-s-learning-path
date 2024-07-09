function Circle(radius){
    this.radius = radius;
    this.draw = function(){
            console.log("draw");
    }
}
const circle = new Circle(10);

//We can add properties
circle.location = { x: 1};

//We use the brackets when you have special characters or space
const propertyName = 'location1'
circle[propertyName] = {x: 1};

//To delete properties (you can use both cases)
delete circle.location1;

console.log(circle);