/*
The function interface

Represents a function / operation that takes an argument and returns a value.

Note: The next are the specializations.

1) Bifunction (2 arguments, 1 result)-
2) "Primitive"Function (arguments with specific type, return value is parameterised).
3) To"Primitive"Function (argument is parameterised).
4) "Primitive"To"PrimitiveFunction (argument and return type are specialized).

Declaration:

        Function<"wrapper classes / classes"> name = "parameter" -> implementation

Example:

        Function<String, Integer> map = str -> str.length();
        var length = map.apply("sky");

*/

package LambdaExpressionsAndFunctionalInterfaces;

public class TheFunctionInterface {
    
}
