/*
For each loop

We use it to iterate over arrays or collections.
It is always forwarf, don't have access to the index.
*/
package controlFlow;

public class ForEachLoop {
    public void forEachLoop(){
        String[] fruits = {"Apple", "Mango", "Orange"};

        for(String fruit : fruits)
            System.out.println(fruit);
    }
}
