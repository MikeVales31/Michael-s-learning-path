/*
Custom exceptions

Note: you need to know what you want (checked / unchecked exceptions)

1)Create a class with the name of the exception.

If you want a checked exception you need to extend the "Exception" class.
If you want a unchecked exception you need to extend the "RuntimeException" class.

2) Use the "extends" keyword and call the "type of exception".
3) Use the constructor of the parent class.

Example:

public class InssuficientFundsException extends Exception{
    public InsufficientFundsException(){
    super("Inssuficient funds in your account")
    }
}



*/

package Exceptions;

public class CutomExceptions {
    
}
