
package com.solera.supermarket.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.solera.supermarket.Model.User;
import com.solera.supermarket.Repository.UserRepository;

@Service
public class ServiceUser {
    private final UserRepository userRepository;

    public ServiceUser(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long userId, User user) {
        user.setId(userId);
        return userRepository.save(user);
    }

    public Boolean deleteUser(Long userId) {
        userRepository.deleteById(userId);
        return !userRepository.existsById(userId);
    }
}
