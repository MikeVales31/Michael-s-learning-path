/*
Comparing objects

when you do the comparison == it will check the reference, 
the equals method will return the same result.

public class Point{
private x;
private y;

}

public Point(int x, int y){
    this.x = x;
    this.y = y;
}

Note: you go to the main class.

public void main(String[] args){
    var point1 = new Point(1,2);
    var point2 = new Point(1,2);

    System.out.println(point1 == point2);
}

We need to override a method.

@Override
public boolean equals(Object obj){
    if(this == obj)
        return true;    

    if(!(obj instance of Point))
        return false;

    var other = (Point)obj;
    return other.x == x && other.y == y; 
       
}

@Override
public int hashCode(){
    return Objects.hash(x, y);
}
*/ 

package Inheritance;

public class ComparingObjects {
    
}
