package com.example.demo;

import java.util.List;
import java.util.stream.Collectors;

public class Filter {
    public List<String> filterByInitial(List<String> names, char initial) {
        return names.stream()
                     .filter(n -> !n.isEmpty() && n.charAt(0) == initial)
                     .collect(Collectors.toList());
    }
}