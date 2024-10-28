/*
Method references

It is used when you only pass parameters to an existing method.

    class / object  + " :: " + method
    
Note: we can reference static or instance methods in the class and constructors.
Note: Can write compact and easier to read lambda expressions.

Example:

    public class LambaDemo{
    
        static method 1,

        static method 2(){
            greet(meesage -> print(message));                        Note: lambda expression (same)
            greet("class name" :: print);                            Note: method reference (same)

        }

        public static void greet("parameters"){
            parameter.print("Hello world");
        }
    }
*/
package LambdaExpressionsAndFunctionalInterfaces;

public class MethodReferences {
    
}
