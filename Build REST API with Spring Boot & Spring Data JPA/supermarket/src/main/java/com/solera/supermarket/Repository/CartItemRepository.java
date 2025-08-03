package com.solera.supermarket.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.solera.supermarket.Model.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    
    @Query("SELECT ci FROM CartItem ci WHERE ci.car.id = :carId AND ci.product.id = :productId")
    Optional<CartItem> findByCarIdAndProductId(@Param("carId") Long carId, @Param("productId") Long productId);
    
}
