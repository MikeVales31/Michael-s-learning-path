package cleanCoding;

import java.text.NumberFormat;
import java.util.Scanner;

public class PaymentSchedule {
    public void paymentSchedule(){
        /*
        int principal = (int)question("principal, ", 0, 1000, 1_000_000);
        float annualInterestRate = (float)question("annual Interest Rate,  ", 0, 1, 30);
        byte years = (byte)question("years, ", 0, 1, 30);

        String finalValue = mortgageCalculation(annualInterestRate, years, principal);
       
        System.out.println("Mortgage: " + finalValue);
        
        */

        int number = 5;
        switch (number) {
            case (5):
                System.out.println("it is big");
                break;
            
            default:
                System.out.println("trolazo");
                break;
        }
        
    }
    
    public double question(String message, double value, int min, int max){
        Scanner scanner = new Scanner(System.in);

        while(!(value >= min && value <= max)){
            System.out.println(message + " enter a value between " + min + " and " + max);
            value = scanner.nextDouble();
        }
        //scanner.close();
        return value;
    }

    public String mortgageCalculation(float annualInterestRate, byte years, int principal){
        double r = (annualInterestRate/100)/12;
        int n = years * 12;
        double mortgage = (principal * (r * Math.pow((1 + r), n)))/ (Math.pow((1 + r), n) - 1);
        
        NumberFormat mortgageFormat = NumberFormat.getCurrencyInstance();
        String result = mortgageFormat.format(mortgage);
        
        return result;
    }
}
