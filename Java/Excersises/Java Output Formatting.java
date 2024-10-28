//Java Output Formatting (hackerrank)

import java.util.Scanner;

public class Solution {

    public static void main(String[] args) {
            Scanner sc=new Scanner(System.in);
            System.out.println("================================");
            for(int i=0;i<3;i++){
                String s1=sc.next();
                int x=sc.nextInt();
                byte size = (byte)s1.length();
                byte numberOfSpaces = (byte)(15 - size );
                
                
                System.out.print(s1);
                for(int j=0; j < numberOfSpaces; j++){
                System.out.print(" ");    
                }
                if(x < 10)
                    System.out.println("00" + x);
                else if(x < 100)
                    System.out.println("0" + x);
                else
                System.out.println(x);
                //Complete this line
            }
            System.out.println("================================");

    }
}



