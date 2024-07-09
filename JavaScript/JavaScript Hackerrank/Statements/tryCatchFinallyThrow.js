//try: like the name says what JS will try to run 
try{
  x= a+b;
}
//catch: what happens if there is a mistake.
catch(e){
    if(e instanceof TypeError){
        console.log("This method does not exist");
    }
    else if(e instanceof SyntaxError){
        console.log("this is not the way to write it");
    }
    else if(e instanceof RangeError){
        console.log("You are out of range");
    }
    else if(e instanceof ReferenceError){
        console.log("The reference is not declared");
    }
    else if(e instanceof URIError){
        console.log("Something is wrong with the URI code");
    }
}
//finally: it will executes does not matter the rest
finally{
    console.log("Bravo");
}
//throw: serve for the exceptions can return string, number, boolean  or object.
if(x === undefined) throw "It is undefined";  