/*
Multi dimensional arrays

We need to use the deepToString function to see the arrays,
if we use Arrays.ToString the only thing that will return is a reference.
*/
package types;

import java.util.Arrays;

public class MultiDimensionalArrays {
    
    public void multiDimensionalArrays(){
        int[][] numbers = {{1, 2, 3}, {4, 5, 6}};
        System.out.println(Arrays.deepToString(numbers));
    } 
}
