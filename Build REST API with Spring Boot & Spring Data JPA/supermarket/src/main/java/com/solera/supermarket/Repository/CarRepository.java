package com.solera.supermarket.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.solera.supermarket.Model.Car;

@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    
    @Query("SELECT c FROM Car c LEFT JOIN FETCH c.items ci LEFT JOIN FETCH ci.product WHERE c.id = :id")
    Optional<Car> findByIdWithItems(@Param("id") Long id);
    
    @Query("SELECT DISTINCT c FROM Car c LEFT JOIN FETCH c.items ci LEFT JOIN FETCH ci.product")
    List<Car> findAllWithItems();

}
