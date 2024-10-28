/*
Waiting for the first task 


When you have 2 different tasks and one responds slower and we want to call it concurrently.

1) Recieve or create tasks of type CompletableFuture.
2) CompletableFuture.anyOf( task 1, task 2)                  Note: anyOf() return a new CompletableFuture.
                    . thenAccept( lambda ) 
*/


package TheExecutiveFramework;

public class WaitingForTheFirstTask {
    
}
