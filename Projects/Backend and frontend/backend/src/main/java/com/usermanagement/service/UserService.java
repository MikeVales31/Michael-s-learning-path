package com.usermanagement.service;

import com.usermanagement.dto.UserDTO;
import com.usermanagement.entity.User;
import com.usermanagement.exception.UserNotFoundException;
import com.usermanagement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    
    @Autowired
    private UserRepository userRepository;
    
    public List<User> getAllUsers() {
        return userRepository.findAllOrderByCreatedAtDesc();
    }
    
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("User not found"));
    }
    
    public User createUser(UserDTO userDTO) {
        User user = new User(userDTO.getUsername(), userDTO.getAge());
        return userRepository.save(user);
    }
    
    public User updateUser(Long id, UserDTO userDTO) {
        User existingUser = getUserById(id);
        existingUser.setUsername(userDTO.getUsername());
        existingUser.setAge(userDTO.getAge());
        return userRepository.save(existingUser);
    }
    
    public void deleteUser(Long id) {
        User user = getUserById(id);
        userRepository.delete(user);
    }
    
    public boolean userExists(Long id) {
        return userRepository.existsById(id);
    }
}
