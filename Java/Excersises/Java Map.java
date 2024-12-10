//Java Map(hackerrank)

import java.util.*;
import java.io.*;

class Solution{
	public static void main(String []argh)
	{
		Scanner in = new Scanner(System.in);
		int n = in.nextInt();
		in.nextLine();
        
        Map<String, String> map = new HashMap<>();
        ArrayList<String> result = new ArrayList<>();
        String[] names = new String[n];
        
		for(int i = 0; i < n; i++)
		{
			String name = in.nextLine();
			String phone = in.nextLine();
            
            map.put(name, phone);
        } 
        for(int i = 0; i < n; i++) {
            String name = in.nextLine();
            if(map.get(name) == null)
                System.out.println("Not found");
            else {
                System.out.println(name + "=" + map.get(name));
            } 
        }
	}
}
