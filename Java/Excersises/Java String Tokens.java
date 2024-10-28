//Java String Tokens (hackerrank)

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String s = scan.nextLine();
        
        // Write your code here.
        String regex = "\\s+";
        String regex2 = "[!,?\\._@']";
        String s2 = s.replaceAll(regex2 , " ");
        String s3 = s2.replaceAll(regex , " ");
        String s4 = s3.trim();
        
        String[] elements = s4.split("\\s");
        
        
        // Condicion si solo tiene espacio el array o anda vacio
        
        if(s4.length() == 0 )
            System.out.println("0");
        
        else{
            System.out.println(elements.length);
            for(String element : elements)
                System.out.println(element);    
        }    
        scan.close();
    }
}
