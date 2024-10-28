//Java BigInteger (hackerrank)

import java.io.*;
import java.util.*;
import java.math.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
   
    Scanner scanner = new Scanner(System.in);
    BigInteger number1 = scanner.nextBigInteger();
    BigInteger number2 = scanner.nextBigInteger();
    
    System.out.println(number1.add(number2));
    System.out.println(number1.multiply(number2));
    
    }
}
