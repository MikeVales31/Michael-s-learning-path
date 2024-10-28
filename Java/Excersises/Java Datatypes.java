//Java Datatypes (hackerrank)

import java.util.*;
import java.io.*;
import java.math.BigInteger;



class Solution{
    public static void main(String []argh){
        Scanner sc = new Scanner(System.in);
        
        int t = sc.nextInt();
        
        //ranges
        BigInteger maxL = new BigInteger("9223372036854775807"); 
        BigInteger minL = new BigInteger("-9223372036854775808");
        BigInteger maxInt = new BigInteger("2147483647");
        BigInteger minInt = new BigInteger("-2147483648");
        BigInteger maxS = new BigInteger("32767");
        BigInteger minS = new BigInteger("-32768"); 
        BigInteger maxB = new BigInteger("127");
        BigInteger minB = new BigInteger("-128");
        
        // comparison
        for(int i = 0;i < t;i++){
            BigInteger x = sc.nextBigInteger();      
            if(x.compareTo(maxL) <= 0 && x.compareTo(minL) >= 0){
                System.out.println(x + " can be fitted in:");
                
                if( x.compareTo(minB) >= 0  && x.compareTo(maxB) <= 0){
                    System.out.println("* byte");
                    System.out.println("* short");
                    System.out.println("* int");
                    System.out.println("* long");
                }
                else if(x.compareTo(minS) >= 0 && x.compareTo(maxS) <= 0){
                    System.out.println("* short");
                    System.out.println("* int");
                    System.out.println("* long");
                }
                else if(x.compareTo(minInt) >= 0 && x.compareTo(maxInt) <= 0){
                    System.out.println("* int");
                    System.out.println("* long");
                }
                else 
                    System.out.println("* long");
            }
            else
                System.out.println(x + " can't be fitted anywhere.");
    }
  }
}

