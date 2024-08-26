/*
Do while loops

Even if the conditions is false it will run at least once.
*/

package controlFlow;

import java.util.Scanner;

public class DoWhileLoops {
    public void doWhileLoops(){
        Scanner scanner = new Scanner(System.in);
        String input = "";

        do{
            System.out.println("Input: ");
            input = scanner.next().toLowerCase();
            System.out.println(input);
        }while(!input.equals("quit"));
        scanner.close();
    }    
}
