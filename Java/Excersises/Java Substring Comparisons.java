//Java Substring Comparisons (hackerrank)

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        String s = scanner.nextLine();
        int k = scanner.nextInt();
        String actual = "";
        String biggest = s.substring(0, k);
        String shortest = s.substring(0, k);
        
        ArrayList words = new ArrayList();
        
        
        
        for(int i = 1; i <= s.length() -k; i++){
            actual = s.substring(i, i + k);
            if(actual.compareTo(shortest) <= 0)
                shortest = actual;
            else if(actual.compareTo(biggest) > 0)
                biggest = actual;
        }
              
        System.out.println(shortest);
        System.out.println(biggest);   
  }
}

