package com.solera.supermarket.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.solera.supermarket.DTO.ProductCartSummary;
import com.solera.supermarket.Model.Car;
import com.solera.supermarket.Model.CartItem;
import com.solera.supermarket.Model.Product;
import com.solera.supermarket.Repository.CarRepository;
import com.solera.supermarket.Repository.CartItemRepository;
import com.solera.supermarket.Repository.ProductRepository;

import lombok.AllArgsConstructor;



@Service
@AllArgsConstructor
public class ServiceCar {


    private final CarRepository carRepository;
    private final ProductRepository productRepository;
    private final CartItemRepository cartItemRepository;
    
    


    public Car getCarById(Long id) {
        return carRepository.findByIdWithItems(id).orElse(null);
    }

    public List<Car> getAllCars() {
        return carRepository.findAllWithItems();
    }

    public Car createCar(Car car) {
        return carRepository.save(car);
    }

    public Car updateCar(Long carId, Car car) {
        car.setId(carId);
        return carRepository.save(car);
    }

    @Transactional
    public Boolean deleteCar(Long carId) {
        try {
            // Verificar que el carrito existe
            if (!carRepository.existsById(carId)) {
                throw new RuntimeException("Carrito no encontrado con ID: " + carId);
            }
            
            // Con CascadeType.ALL y orphanRemoval = true en el modelo Car,
            // los CartItems se eliminan automáticamente
            carRepository.deleteById(carId);
            
            return !carRepository.existsById(carId);
        } catch (Exception e) {
            throw new RuntimeException("Error al eliminar el carrito: " + e.getMessage());
        }
    }

    @Transactional
    public Car addItems(Long carId, Long productId, int quantity) {
       
        Car car = getCarById(carId);
        if (car == null) {
            throw new RuntimeException("Carrito no encontrado con ID: " + carId);
        }

        Optional<Product> productOpt = productRepository.findById(productId);
        if (productOpt.isEmpty()) {
            throw new RuntimeException("Producto no encontrado con ID: " + productId);
        }

        Product product = productOpt.get();
        
        // Buscar si ya existe un CartItem para este producto en este carrito
        Optional<CartItem> existingCartItem = cartItemRepository.findByCarIdAndProductId(carId, productId);
        
        if (existingCartItem.isPresent()) {
            // Si ya existe, aumentar la cantidad
            CartItem cartItem = existingCartItem.get();
            cartItem.setQuantity(cartItem.getQuantity() + quantity);
            cartItemRepository.save(cartItem);
        } else {
            // Si no existe, crear un nuevo CartItem
            CartItem newCartItem = new CartItem(car, product, quantity);
            cartItemRepository.save(newCartItem);
        }

        return carRepository.findById(carId).orElse(car);
    }

    // Método para contar cuántas veces está un producto en el carrito
    public int getProductQuantityInCart(Long carId, Long productId) {
        Car car = getCarById(carId);
        if (car == null) {
            throw new RuntimeException("Carrito no encontrado con ID: " + carId);
        }
        
        Optional<CartItem> cartItem = cartItemRepository.findByCarIdAndProductId(carId, productId);
        return cartItem.map(CartItem::getQuantity).orElse(0);
    }

    // Método para obtener un resumen del carrito con cantidades
    public List<ProductCartSummary> getCartSummary(Long carId) {
        Car car = getCarById(carId);
        if (car == null) {
            throw new RuntimeException("Carrito no encontrado con ID: " + carId);
        }

        List<ProductCartSummary> summaryList = new ArrayList<>();
        
        for (CartItem cartItem : car.getItems()) {
            Product product = cartItem.getProduct();
            ProductCartSummary summary = new ProductCartSummary(
                product.getId(),
                product.getName(), 
                product.getPrice(),
                cartItem.getQuantity()
            );
            summaryList.add(summary);
        }
        
        return summaryList;
    }

    // Método para remover productos del carrito
    @Transactional
    public Car removeItems(Long carId, Long productId, int quantity) {
        Car car = getCarById(carId);
        if (car == null) {
            throw new RuntimeException("Carrito no encontrado con ID: " + carId);
        }

        Optional<CartItem> cartItemOpt = cartItemRepository.findByCarIdAndProductId(carId, productId);
        if (cartItemOpt.isEmpty()) {
            throw new RuntimeException("Producto no encontrado en el carrito");
        }

        CartItem cartItem = cartItemOpt.get();
        int currentQuantity = cartItem.getQuantity();

        if (quantity >= currentQuantity) {
            // Si queremos remover todo o más de lo que hay, eliminar el CartItem completo
            cartItemRepository.delete(cartItem);
        } else {
            // Si queremos remover solo una parte, reducir la cantidad
            cartItem.setQuantity(currentQuantity - quantity);
            cartItemRepository.save(cartItem);
        }

        return getCarById(carId);
    }

}
