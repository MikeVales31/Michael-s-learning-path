/*
Handling timeouts


When you want to have a limit on time to get a response.

1) Create or recieve a CompletableFuture 
2) Call the method orTimeout( #, unit )
                                    Note: for units we use TimeUnit."type"
    
    or

2) Call the method completeOnTimeout( default value if timeout, #, unit)
3) call the get method.

Note: on a try catch block.
*/


package TheExecutiveFramework;

public class HandlingTimeouts {
    
}
