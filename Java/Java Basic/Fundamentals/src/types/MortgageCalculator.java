package types;

import java.util.Scanner;

public class MortgageCalculator {
    
    public void mortgageCalculator(){
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Principal: ");
        int principal = scanner.nextInt();

        System.out.print("Annual Interest Rate: ");
        float annualInterestRate = scanner.nextFloat();

        System.out.print("Period (Years): ");
        byte years = scanner.nextByte();
        
        double r = (annualInterestRate/100)/12;
        int n = years * 12;
        scanner.close();

        System.out.println("Mortgage: " + (principal * (r * Math.pow((1 + r), n)))/ (Math.pow((1 + r), n) - 1));
        
    }
    
}
