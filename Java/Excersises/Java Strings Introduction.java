//Java Strings Introduction (hackerrank)

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    Scanner scanner = new Scanner(System.in);
    String A = scanner.nextLine();
    String B = scanner.nextLine();
    
    int number = A.length() + B.length();
    int compare = A.compareTo(B);
    
    A = A.substring(0,1).toUpperCase() + A.substring(1);
    B = B.substring(0,1).toUpperCase() + B.substring(1);
    
    System.out.println(number);
    System.out.println((compare >0)? "Yes":"No");
    System.out.println(A + " " + B); 
    }
}
