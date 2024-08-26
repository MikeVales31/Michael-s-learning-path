/*
If statements

it allow us to make decisions based on certain conditions.
if
else if 
else

*/
package controlFlow;

public class IfStatements {
    public void ifStatement(){
        byte temp = 32;
        if(temp > 30){
            System.out.println("It's a hot day");
            System.out.println("Drink water");
        }
        else if(temp > 20 && temp <= 30)
            System.out.println("Beatiful day");
        
        else 
            System.out.println("Cold day");
    }
}
