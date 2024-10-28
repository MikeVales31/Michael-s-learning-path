/*
Collections framework(overview)

---------------------------------Interfaces------------------------------------------------

1) Iterable : represent an object that can be used in the for each statement (iterate/loop).
Note: it is generic

2) Collection: represents an object that can act like a container or a collection of objects.
Note: it is generic and iterable.
Note: some of the methods are (add, remove, contains)

---------------------------------Subinterfaces---------------------------------------------

List: allows to work with an ordered collection "sequence" and acces the objects using the index.

        ArrayList (dinamic array)                                         implementation
        LinkedList (objectt and pointer to the next object)               implementation
        ...

Note: some of the methods are (idexOf, lastIndexOf, subList)

Queue: provides additional operations for working with a queue of objects. 
       (process jobs based on the order we recieve them)

        PriorityQueue                                                     implementation
        ArrayDeque
        ...

Note: some of the methods are (peek, poll, offer)


Set: represents a collectionwithout duplicates.

        HashSet                                                           implementation

Note: doesn't guarantee the order of items.
Note: some of the methods are (addAll, retainAll, removeAll)
*/

package Collections;

public class CollectionsFramework {
    
}
