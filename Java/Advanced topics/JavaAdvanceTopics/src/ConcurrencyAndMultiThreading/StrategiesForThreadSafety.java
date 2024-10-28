/*
Strategies for thread safety


1) Confinement: not share dat across threads.

                Note: create a thread per object, need to store each one "list" or anything.

2) Inmutable: the date or data cannot be changed after it is created.

3) Synchronization: prevent multiple threads from access the same object concurrently
                    with locks. (sequencially).

                    Note: you should avoid it.

4) Atomic objects: classes that allow us to achieve thread safety without using locks
                   (java do a single operation like atoms can not be broken).

5) Partitioning: data into segments that can be access concurrently
                 (multiple threads can access a collection object but only one thread at
                 the time can access a segment in that collection).
*/


package ConcurrencyAndMultiThreading;

public class StrategiesForThreadSafety {
    
}
