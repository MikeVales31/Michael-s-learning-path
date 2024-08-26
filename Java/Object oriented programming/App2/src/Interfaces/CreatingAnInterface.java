/*
Creating an interface

We use the keyword interface.

Example:

public interface TaxCalculator {
    double calculateTax();
    
}

Note: to use the interface we do the next and we should apply the override annotation. 
At the beginning of the class we use the keyword "implements" followed by the name 
of the interface, the method that will use the interface add the keyword "Override". 

public class TaxCalculator2018 implements TaxCalculator {
    private double taxableIncome;
    
    public TaxCalculator2018(double taxableIncome){
        this.taxableIncome = taxableIncome;
    }

    @Override
    public double calculateTax(){
        return taxableIncome * 0.4;
    }

}





*/
package Interfaces;

public class CreatingAnInterface {
    
}
