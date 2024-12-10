import java.io.*;
import java.util.*;

public class MeanMedianAndMode {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numberOfElements = sc.nextInt();
        double sumOfElements = 0;
        double minimumNumber = 99999999;
        int indexMostRepeatedNumber = 0;
        int count = 0;
        
        List<Double> arrayOfNumbers = new ArrayList<>();
        List<Double> mostRepeatedNumber = new ArrayList<>();
        Map<Double,Integer> allNumbers = new HashMap<>();
        
        mostRepeatedNumber.add(0, (double)Integer.MAX_VALUE);
        
        for(int i = 0; i < numberOfElements; i++){
            double number = sc.nextDouble();
            sumOfElements += number;
            arrayOfNumbers.add(i, number);
            
            if(number < minimumNumber)
                minimumNumber = number;
            if(allNumbers.get(number) == null)
                allNumbers.put(number, 1);
            else{
                allNumbers.put(number, allNumbers.get(number) + 1);
                
                if(allNumbers.get(number) > count){
                    count = allNumbers.get(number) + 1;
                    mostRepeatedNumber.clear();
                    indexMostRepeatedNumber = 0;
                    mostRepeatedNumber.add(indexMostRepeatedNumber, number);
                    indexMostRepeatedNumber++;
                }
                
                mostRepeatedNumber.add(indexMostRepeatedNumber, number);
            }
        }
        if(mostRepeatedNumber.get(0) == (double)Integer.MAX_VALUE)
            mostRepeatedNumber.set(0, minimumNumber);
            
        Collections.sort(arrayOfNumbers);
        
        double mean = getMean(sumOfElements, numberOfElements);
        double median = getMedian(arrayOfNumbers, numberOfElements);
        double mode = getMode(mostRepeatedNumber);
        
        System.out.println(mean);
        System.out.println(median);
        System.out.println(mode);
        
        
    }
    private static double getMean(double sumOfAllElements, int numberOfElements){
        double mean = 0;  
        mean = sumOfAllElements/numberOfElements;
        
        return mean;
    }
    private static double getMedian(List<Double> sortedArray, int numberOfElements){
        if(numberOfElements % 2 == 0){
            int positionFirstOfPair = numberOfElements/2 - 1;
            int positionSecondOfPair = numberOfElements/2;
            double medianOfPairs = (
                        sortedArray.get(positionFirstOfPair) + 
                        sortedArray.get(positionSecondOfPair)) / 2;
            
            return medianOfPairs;
        }
        else{
            int positionNonPairs = (int)Math.ceil(numberOfElements/2) - 1; 
            double medianOfNonPairs = sortedArray.get(positionNonPairs);
            
            return medianOfNonPairs;
        }
    }
    private static double getMode(List<Double> mostRepeatedNumbers){
        double minimumMostRepeted = 0;
        
        Collections.sort(mostRepeatedNumbers);
        minimumMostRepeted = mostRepeatedNumbers.get(0);
        
        return minimumMostRepeted;
    }
}
