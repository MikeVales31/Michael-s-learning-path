//Java Subarray (hackerrank)

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        
       ArrayList<List<Integer>> possibleArrays = new ArrayList<>();
       ArrayList<Integer> array = new ArrayList<>();
    
       int count = 0;
       
       Scanner scanner = new Scanner(System.in);
       int maxSizeOfArray = scanner.nextInt();
       
       for(int i = 0; i < maxSizeOfArray; i++){
           int currentNumber = scanner.nextInt();
           array.add(currentNumber);
       }
       
       for(int j = 0; j < maxSizeOfArray; j++){
           for(int k = j + 1; k <= maxSizeOfArray; k++){
             possibleArrays.add(array.subList(j,k));
               
           }
       }
       
       for(int l = 0; l < possibleArrays.size(); l++){
           int sum = 0;
    
           for(int m = 0; m < possibleArrays.get(l).size(); m++){
                sum += possibleArrays.get(l).get(m);  
           }
           
           if(sum < 0)
                count++;  
       }
       System.out.println(count);
    }
}

