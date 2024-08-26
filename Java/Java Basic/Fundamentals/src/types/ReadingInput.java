package types;

import java.util.Scanner;

public class ReadingInput {
    public void readingInpput(){
        Scanner scanner = new Scanner(System.in);
        System.out.print("Age: ");
        byte age = scanner.nextByte();
        System.out.println("You are " + age);
        scanner.close();
    }
}
