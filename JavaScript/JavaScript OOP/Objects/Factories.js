
/*
if an object has 1 or more methods we said that object has behaviour
factory or a constructor function for this cases
*/

//Factory function (crea objetos con un template)
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
circle.draw();