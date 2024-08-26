import Interfaces.TaxCalculator2018;
import Interfaces.TaxCalculator2019;
import Interfaces.TaxReport;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println();
        
        var calculator = new TaxCalculator2018(5_000);
        var report = new TaxReport(calculator);
        report.show();
        
        report.setCalculator(new TaxCalculator2019());
        report.show();
    }
}
