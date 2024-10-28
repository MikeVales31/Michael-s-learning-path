/*
Try with resources statement

try("declare and initialize external resources"){

}catch(){

}

Note: you can make it with multiple resources.

try(
    "declare and initialize external resources";
    "declare and initialize external resources";
    "declare and initialize external resources";
){

}catch(){

}

Example:

public static void show(){
    try(
        var reader = new FileReader("file.txt");
        var writer = new FileWriter("...");
    ){
        var value = reader.read();    
    }
    catch(){
        "code"
    }
}

*/


package Exceptions;

public class TryWithResourcesStatement {
    
}
