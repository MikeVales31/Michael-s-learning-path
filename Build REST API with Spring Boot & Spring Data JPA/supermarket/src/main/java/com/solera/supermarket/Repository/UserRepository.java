package com.solera.supermarket.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.solera.supermarket.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    
}

