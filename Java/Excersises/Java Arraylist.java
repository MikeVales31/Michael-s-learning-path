//Java Arraylist (hackerrank)

import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

public class Solution {

    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        int numberOfLines = scanner.nextInt();
        ArrayList<ArrayList<Integer>> arrayOfArrays = new ArrayList<>();
        
        for(int i = 0; i < numberOfLines; i++){
            ArrayList<Integer> array = new ArrayList<>();
            int sizeOfArray = scanner.nextInt();
            
            for(int j = 0; j < sizeOfArray; j++){
                array.add(scanner.nextInt());                
            } 
            arrayOfArrays.add(array);           
        } 
        int queries = scanner.nextInt();
        
        for(int k = 0; k < queries; k++){ 
            try{
                System.out.println(arrayOfArrays.get(scanner.nextInt() - 1).get(scanner.nextInt() - 1));
            }catch(Exception e){
                System.out.println("ERROR!");
            }
                       
        }
    }
}

