
package com.solera.supermarket.Controller;


import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.solera.supermarket.Model.User;
import com.solera.supermarket.Service.ServiceUser;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    private final ServiceUser userService;

    public UserController(ServiceUser userService) {
        this.userService = userService;
    }

    @GetMapping("/get/{id}")
    public User getUserById(@PathVariable Long id) {
        return userService.getUserById(id);
    }

    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/add")
    public User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }

    @PutMapping("/update/{userId}")
    public User updateUser(@PathVariable Long userId, @RequestBody User user) {
        return userService.updateUser(userId, user);
    }

    @DeleteMapping("/delete/{userId}")
    public Boolean deleteUser(@PathVariable Long userId) {
        return userService.deleteUser(userId);
    }
}

