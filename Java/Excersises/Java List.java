//Java List (hackerrank)

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        List<Integer> list = new ArrayList<>();
        
        Scanner scanner = new Scanner(System.in);
        int elementsInList = scanner.nextInt();
        
        for(int i = 0; i < elementsInList; i++){
            int element = scanner.nextInt();
            list.add(i, element);
        }
        
        int queries = scanner.nextInt();
        scanner.nextLine();
        
       for(int j = 0; j < queries; j++){
            String instruction = scanner.nextLine();
            
            if(instruction.compareTo("Insert") == 0){
                int index = scanner.nextInt();
                int number = scanner.nextInt();
                list.add(index, number);
                
                if(scanner.hasNext()){
                    scanner.nextLine();                    
                }
            } 
            else{
                int index = scanner.nextInt();
                list.remove(index);
                
                if(scanner.hasNext()){
                    scanner.nextLine();
                    
                }
            }
       }
     
     for(int j = 0; j < list.size(); j++){
         System.out.print(list.get(j) + " ");
     }
    }
}
