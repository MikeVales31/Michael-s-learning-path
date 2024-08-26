/*
Formatting numbers

select NumberFormat

getCurrencyInstance -> dollar format
getPercentInstance -> percent format
*/
package types;

import java.text.NumberFormat;

public class FormattingNumbers {
    public void formattingNumbers(){
        NumberFormat currency = NumberFormat.getCurrencyInstance();
        String result = currency.format(1234567.891);
        System.out.println(result);
    }    
}
