/*
Creating streams

You can create it from:

1) Collections                    Note: create a collection and use the method stream.

2) Array                          Note: create an array, use the Arrays class and the method stream.

                                    Example:

                                        int[] num = {1, 2, 3};
                                        Arrays.stream(num);

3) Arbitrary number of objects    

                                    Example:

                                        Stream.of(#1, #2, ...);

Note: we can generate infinite streams using Stream.generate("Supplier") or Stream.iterate()

Supplier: operation that supplies ir returns a value.

    Example:
            () -> Math.random


*/


package Streams;

public class CreatingStreams {
    
}
