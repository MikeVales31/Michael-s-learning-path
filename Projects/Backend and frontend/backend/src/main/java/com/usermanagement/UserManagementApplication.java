package com.usermanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UserManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(UserManagementApplication.class, args);
        System.out.println("🚀 User Management Backend started successfully!");
        System.out.println("📚 API endpoints:");
        System.out.println("   GET    /api/users     - Get all users");
        System.out.println("   POST   /api/users     - Create user");
        System.out.println("   PUT    /api/users/{id} - Update user");
        System.out.println("   DELETE /api/users/{id} - Delete user");
        System.out.println("   GET    /api/health    - Health check");
        System.out.println("🗄️  Database: MySQL");
    }
}
