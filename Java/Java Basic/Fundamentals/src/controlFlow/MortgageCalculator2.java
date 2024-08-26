package controlFlow;

import java.text.NumberFormat;
import java.util.Scanner;

public class MortgageCalculator2 {
    public void mortgageCalculator2(){
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Principal ($1k - $1M): ");
        int principal = scanner.nextInt();
        while(principal < 1_000 || principal > 1_000_000){
            System.out.println("Enter a number between 1,000 and 1,000,000");
            System.out.print("Principal ($1k - $1M): ");
            principal = scanner.nextInt();

        }

        System.out.print("Annual Interest Rate: ");
        float annualInterestRate = scanner.nextFloat();
        while(annualInterestRate <= 0 || annualInterestRate > 30){
            System.out.println("Enter a value grater than 0 and less than or equal to 30.");
            System.out.print("Annual Interest Rate: ");
            annualInterestRate = scanner.nextFloat();
        }

        System.out.print("Period (Years): ");
        byte years = scanner.nextByte();
        while(!(years > 0 && years <= 30)){
            System.out.println("Enter a value between 1 and 30.");
            System.out.print("Period (Years): ");
            years = scanner.nextByte();
        }
        
        scanner.close();
        
        double r = (annualInterestRate/100)/12;
        int n = years * 12;
        double mortgage = (principal * (r * Math.pow((1 + r), n)))/ (Math.pow((1 + r), n) - 1);
        NumberFormat mortgageFormat = NumberFormat.getCurrencyInstance();
        String result = mortgageFormat.format(mortgage);
            
    
        System.out.println("Mortgage: " + result);
        
    }
}
