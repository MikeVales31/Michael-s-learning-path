package com.example.demo;

import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;

class BankTest {

    //bank probes
    @Test
    void shouldReturnCorrectOwnerAndToString() {
        Bank bank = new Bank("Eve", 1000);
        assertEquals("Eve", bank.getOwner());
        assertTrue(bank.toString().contains("Eve"));
        assertTrue(bank.toString().contains("1000"));
    }

    @Test
    void shouldDepositWithDrawCorrectly(){
        Bank bank = new Bank("Michael",500);
        bank.deposit(200);
        assertEquals(700, bank.getBalance());
        bank.withdraw(50);
        assertEquals(650, bank.getBalance());
    }

    @Test
    void getOwnerOfAccount() {
        Bank bank = new Bank("Alice", 1000);
        assertEquals("Alice", bank.getOwner());
    }

    @Test
    void shouldNotAllowOverdraft() {
        Bank bank = new Bank("Charlie", 1000);
        bank.withdraw(1500);
        assertEquals(1000, bank.getBalance());
    }

    @Test
    void shouldRetire() {
        Bank bank = new Bank("Bob", 1500);
        bank.withdraw(-1500);
        assertEquals(0, bank.getBalance());
    }

    //Calculator probes
    @Test
    void shouldSumEvens() {
        Calculator calculator = new Calculator();
        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 10; i++) {
            numbers.add(i);
        }
        assertEquals(25, calculator.sumEvens(numbers));
    }


    
}