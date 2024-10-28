/*
Mapping elements

We can make it with the map() or flatMap() methods.

1) map() : the function is going to be applied to every object or thing in the lambda expression.

    Note: create a list named "name"

    "name".stream().map("lambda expression").forEach("other lambda expression");


2) flatMap() : when you want to work with the individual elements (array, set, list).

    Note: create a stream (list) "name"

    name.flatMap(list -> list.stream()).forEach(list -> System.out.println(list));

    
*/
package Streams;

public class MappingElements {
    
}
