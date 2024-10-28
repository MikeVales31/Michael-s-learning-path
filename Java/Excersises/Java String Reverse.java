//Java String Reverse (hackerrank)

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        Scanner scanner = new Scanner(System.in);
        String word = scanner.nextLine();
        String reverseWord = "";
        
        for(int i = word.length()-1; i >= 0; i--){
            reverseWord += word.charAt(i);
        }
       
       if(word.equals(reverseWord))
            System.out.println("Yes");
       else 
            System.out.println("No");   
    }
}
