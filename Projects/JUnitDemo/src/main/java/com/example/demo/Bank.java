package com.example.demo;

public class Bank {
    private String owner;
    private int balance;

    public Bank(String owner, int initialBalance) {
        this.owner = owner;
        this.balance = initialBalance;
    }

    public String getOwner() {
        return owner;
    }

    public int getBalance() {
        return balance;
    }

    public void deposit(int amount) {
        if (amount <= 0) {
            throw new IllegalArgumentException("Deposit amount must be positive");
        }
        balance += amount;
    }

    public void withdraw(int amount) {
        if (amount > balance) {
            throw new IllegalArgumentException("Insufficient balance");
        }
        if (amount <= 0) {
            throw new IllegalArgumentException("Withdraw amount must be positive");
        }
        balance -= amount;
    }

    @Override
    public String toString() {
        return "Bank Account [owner=" + owner + ", balance=" + balance + "]";
    }
}