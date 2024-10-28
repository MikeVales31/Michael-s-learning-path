/*
Generics and primitive types

Note: when you create an instance of a generic type, we can only use a reference type 
      as a generic type argument.

new "generic class" <"generic argument">


Note: if you want to store primitive types you have to use the wrapper class.

    Primitive types             Wrapper class
    int                         Integer
    float                       Float
    boolean                     Boolean

    Note: The wrapper classes are the primitives with the first letter in upper case, except for
          Integer and Character.

Example:

    GenericList<Integer> numbers = new GenericList<>();


Boxing: process when java compiler automatically wrap the primitive inside an instance of the "wrapper class"
Unboxing: java compiler extract the value stored in the "wrapper object".

*/

package Generics;

public class GenericsAndPrimitiveTypes {
    
}
