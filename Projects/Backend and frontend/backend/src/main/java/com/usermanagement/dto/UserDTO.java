package com.usermanagement.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public class UserDTO {
    
    @NotBlank(message = "Username is required")
    private String username;
    
    @NotNull(message = "Age is required")
    @Min(value = 0, message = "Age must be between 0 and 150")
    @Max(value = 150, message = "Age must be between 0 and 150")
    private Integer age;
    
    // Constructors
    public UserDTO() {}
    
    public UserDTO(String username, Integer age) {
        this.username = username;
        this.age = age;
    }
    
    // Getters and Setters
    public String getUsername() {
        return username;
    }
    
    public void setUsername(String username) {
        this.username = username;
    }
    
    public Integer getAge() {
        return age;
    }
    
    public void setAge(Integer age) {
        this.age = age;
    }
    
    @Override
    public String toString() {
        return "UserDTO{" +
                "username='" + username + '\'' +
                ", age=" + age +
                '}';
    }
}
