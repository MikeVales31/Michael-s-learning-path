//Java Currency Formatter (hackerrank)

import java.util.*;
import java.text.*;

public class Solution {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double payment = scanner.nextDouble();
        scanner.close();
        
        // Write your code here.
        NumberFormat usFormat = NumberFormat.getCurrencyInstance(Locale.US);
        NumberFormat cnFormat = NumberFormat.getCurrencyInstance(Locale.CHINA);
        NumberFormat fFormat = NumberFormat.getCurrencyInstance(Locale.FRANCE);
        NumberFormat iFormat = NumberFormat.getCurrencyInstance(new Locale("en","in") );
        
        System.out.println("US: " + usFormat.format(payment));
        System.out.println("India: " + iFormat.format(payment));
        System.out.println("China: " + cnFormat.format(payment));
        System.out.println("France: " + fFormat.format(payment));
    }
}

