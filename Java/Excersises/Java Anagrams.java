//Java Anagrams (hackerrank)

import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
    
    Scanner scanner = new Scanner(System.in);
    
    String word1 = scanner.nextLine().toLowerCase();
    String word2 = scanner.nextLine().toLowerCase();
    
    HashMap<String, Integer> map = new HashMap<>();
    HashMap<String, Integer> map2 = new HashMap<>();
    
    if(word1.length() != word2.length())
        System.out.println("Not Anagrams");
    
     else{   
        for(int i=0; i<word1.length(); i++){
            
            String currentChar = String.valueOf(word1.charAt(i));
            String currentCharMap2 = String.valueOf(word2.charAt(i));
        
            if(map.get(currentChar) == null && map2.get(currentCharMap2) == null){
                    map.put(currentChar, 1);
                    map2.put(currentCharMap2, 1);
            }
            else if(map.get(currentChar) == null && map2.get(currentCharMap2) != null){
                    map.put(currentChar, 1);
                    map2.put(currentCharMap2, map2.get(currentCharMap2) + 1);
            }
            else if(map.get(currentChar) != null && map2.get(currentCharMap2) == null){
                    map.put(currentChar, map.get(currentChar) +1);
                    map2.put(currentCharMap2, 1);
            }
            else{
                    map.put(currentChar, map.get(currentChar) +1);
                    map2.put(currentCharMap2, map2.get(currentCharMap2) + 1);
            } 
            
        }
    System.out.println((map.equals(map2))? "Anagrams":"Not Anagrams");
    } 
    
    }
    
}
