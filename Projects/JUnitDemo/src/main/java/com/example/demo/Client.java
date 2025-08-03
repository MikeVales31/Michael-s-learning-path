package com.example.demo;

import java.util.Objects;

public class Client {
    private String name;
    private int age;

    public Client(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Client)) return false;
        Client client = (Client) o;
        return age == client.age &&
               Objects.equals(name, client.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, age);
    }
}