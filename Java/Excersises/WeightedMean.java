public class WeightedMean {
import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;



    public static void weightedMean(List<Integer> X, List<Integer> W) {
        int numberOfElements = X.size();
        double sumW = 0;
        double totalW = 0;
        double result = 0;
        
        for(int i = 0; i < numberOfElements; i++){
           sumW += W.get(i); 
           totalW += X.get(i) * W.get(i);
        }
        result = totalW/sumW;
        
        System.out.printf("%.1f",result);
        

    }
}


