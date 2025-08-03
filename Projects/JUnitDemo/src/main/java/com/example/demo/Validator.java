package com.example.demo;

public class Validator {
    public boolean isPasswordSecure(String password) {
        return password != null &&
               password.length() >= 8 &&
               password.matches(".*\\d.*");
    }
}