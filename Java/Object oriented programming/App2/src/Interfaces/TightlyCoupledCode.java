package Interfaces;

/*
Tightly-coupled code 

An example is the report class that is using the taxCalculator,
so we are depending on this class.

--------------------------------TaxCalculator-----------------------

public class TaxCalculator {
    private double taxableIncome;
    
    public TaxCalculator(double taxableIncome){
        this.taxableIncome = taxableIncome;
    }

    public double calculateTax(){
        return taxableIncome * 0.3;
    }

}

-----------------------------------TaxReport-------------------------
public class TaxReport {
    private TaxCalculator calculator;

    public TaxReport(){
        calculator = new TaxCalculator(100_000);
    }

    public void show(){
        var tax = calculator.calculateTax();
        System.out.println(tax);
    }
}

*/
public class TightlyCoupledCode {
    
}
