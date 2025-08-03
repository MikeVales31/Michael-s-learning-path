package com.example.demo;

import java.util.Arrays;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== TESTING ALL CLASSES ===\n");

        testValidator();
        
        testCalculator();
        
        testClient();
        
        testFilter();
        
        testBank();
    }

    private static void testValidator() {
        System.out.println("--- VALIDATOR TESTS ---");
        Validator validator = new Validator();
        
        String[] passwords = {
            "password123",  // Valid: >= 8 chars and has number
            "abc123",       // Invalid: < 8 chars
            "mypassword",   // Invalid: >= 8 chars but no number
            "MyPassword1",  // Valid: >= 8 chars and has number
            null            // Invalid: null
        };
        
        for (String password : passwords) {
            boolean isSecure = validator.isPasswordSecure(password);
            System.out.println("Password: " + (password != null ? password : "null") + 
                             " -> " + (isSecure ? "SECURE" : "NOT SECURE"));
        }
        System.out.println();
    }

    private static void testCalculator() {
        System.out.println("--- CALCULATOR TESTS ---");
        Calculator calculator = new Calculator();

        List<Integer> numbers1 = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8);
        List<Integer> numbers2 = Arrays.asList(1, 3, 5, 7, 9);
        List<Integer> numbers3 = Arrays.asList(2, 4, 6, 8, 10);
        List<Integer> numbers4 = Arrays.asList(10, 5, 2);
        List<Integer> numbers5 = Arrays.asList();

        System.out.println("Numbers: " + numbers1 + " -> Sum of evens: " + calculator.sumEvens(numbers1));
        System.out.println("Numbers: " + numbers1 + " -> Sum: " + calculator.sum(numbers1));
        System.out.println("Numbers: " + numbers1 + " -> Multiply: " + calculator.multiply(numbers1));
        System.out.println("Numbers: " + numbers1 + " -> Subtract: " + calculator.subtract(numbers1));
        System.out.println("Numbers: " + numbers1 + " -> Average: " + calculator.average(numbers1));
        System.out.println();

        System.out.println("Numbers: " + numbers2 + " -> Sum of evens: " + calculator.sumEvens(numbers2));
        System.out.println("Numbers: " + numbers3 + " -> Multiply: " + calculator.multiply(numbers3));
        System.out.println("Numbers: " + numbers4 + " -> Subtract: " + calculator.subtract(numbers4));
        System.out.println("Numbers: " + numbers5 + " -> Sum: " + calculator.sum(numbers5));
        System.out.println("Numbers: " + numbers5 + " -> Average: " + calculator.average(numbers5));
        System.out.println();
    }

    private static void testClient() {
        System.out.println("--- CLIENT TESTS ---");
        
        Client client1 = new Client("John Doe", 30);
        Client client2 = new Client("Jane Smith", 25);
        Client client3 = new Client("John Doe", 30);
        
        System.out.println("Client 1: " + client1.getName() + ", age: " + client1.getAge());
        System.out.println("Client 2: " + client2.getName() + ", age: " + client2.getAge());
        System.out.println("Client 3: " + client3.getName() + ", age: " + client3.getAge());
        
        System.out.println("Client1 == Client3? " + client1.equals(client3));
        System.out.println("Client1 == Client2? " + client1.equals(client2));
        System.out.println("HashCode Client1: " + client1.hashCode());
        System.out.println("HashCode Client3: " + client3.hashCode());
        System.out.println();
    }

    private static void testFilter() {
        System.out.println("--- FILTER TESTS ---");
        Filter filter = new Filter();
        
        List<String> names = Arrays.asList("Anna", "Charlie", "Bob", "Alice", "Catherine", "");
        
        char[] initials = {'A', 'C', 'B', 'X'};
        
        for (char initial : initials) {
            List<String> result = filter.filterByInitial(names, initial);
            System.out.println("Names starting with '" + initial + "': " + result);
        }
        System.out.println();
    }

    private static void testBank() {
        System.out.println("--- BANK TESTS ---");
        Bank bank = new Bank("TestUser", 1000);

        // Test deposit
        System.out.println("Depositing 500...");
        bank.deposit(500);
        System.out.println("Balance after deposit: " + bank.getBalance());

        // Test withdraw
        System.out.println("Withdrawing 300...");
        bank.withdraw(300);
        System.out.println("Balance after withdrawal: " + bank.getBalance());

        // Test insufficient balance
        try {
            System.out.println("Trying to withdraw 2000 (should fail)...");
            bank.withdraw(2000);
        } catch (IllegalArgumentException e) {
            System.out.println("Expected error: " + e.getMessage());
        }

        // Test negative deposit
        try {
            System.out.println("Trying to deposit -100 (should fail)...");
            bank.deposit(-100);
        } catch (IllegalArgumentException e) {
            System.out.println("Expected error: " + e.getMessage());
        }

        // Test negative withdraw
        try {
            System.out.println("Trying to withdraw -50 (should fail)...");
            bank.withdraw(-50);
        } catch (IllegalArgumentException e) {
            System.out.println("Expected error: " + e.getMessage());
        }

        // Show owner and toString
        System.out.println("Bank owner: " + bank.getOwner());
        System.out.println(bank);
        System.out.println("=== END OF TESTS ===");
    }
}
