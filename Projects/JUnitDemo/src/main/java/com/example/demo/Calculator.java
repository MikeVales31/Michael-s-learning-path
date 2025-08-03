package com.example.demo;

import java.util.List;

public class Calculator {
    public int sumEvens(List<Integer> numbers) {
        return numbers.stream()
                      .filter(n -> n % 2 == 0)
                      .mapToInt(Integer::intValue)
                      .sum();
    }

    public int sum(List<Integer> numbers) {
        return numbers.stream().mapToInt(Integer::intValue).sum();
    }

    public int multiply(List<Integer> numbers) {
        return numbers.stream().reduce(1, (a, b) -> a * b);
    }

    public int subtract(List<Integer> numbers) {
        return numbers.stream().reduce((a, b) -> a - b).orElse(0);
    }

    public double average(List<Integer> numbers) {
        return numbers.stream().mapToInt(Integer::intValue).average().orElse(0);
    }
}