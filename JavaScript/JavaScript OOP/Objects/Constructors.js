/*
    Objects can be created by a factory function or a constructor function
 */

//Factory function (creates objects with template) keyword: return{}
function createCircle(radius){
    return {
    //properties
        radius,
        //Method 
        draw: function(){
            console.log("draw");
        }
    }
}

const circle = createCircle(1);

//Constructor function (for classes) keywords: this, new
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log("draw")
    }
}
const another = new Circle(1);