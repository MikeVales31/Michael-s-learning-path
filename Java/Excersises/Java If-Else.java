/*
Java If-Else (hackerrank) 
*/

import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {


    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int number = scanner.nextInt();
        
        if(number % 2 != 0)
            System.out.println("Weird");
        else if(number%2 == 0 && number > 1 && number < 6)
            System.out.println("Not Weird");
        else if(number%2 == 0 && number > 5 && number < 21)
            System.out.println("Weird");
        else if(number%2 == 0 && number > 20)
            System.out.println("Not Weird");
        
                
    }
}

