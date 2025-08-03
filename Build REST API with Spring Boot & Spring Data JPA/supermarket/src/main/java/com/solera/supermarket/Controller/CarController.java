package com.solera.supermarket.Controller;


import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.solera.supermarket.DTO.ProductCartSummary;
import com.solera.supermarket.Model.Car;
import com.solera.supermarket.Service.ServiceCar;

@RestController
@RequestMapping("/api/car")
public class CarController {
   
    private final ServiceCar serviceCar;

    public CarController(ServiceCar serviceCar) {
        this.serviceCar = serviceCar;
    }

    @GetMapping("/get/{id}")
    public Car getCarById(@PathVariable Long id) {
        return serviceCar.getCarById(id);
    }

    @GetMapping("/getAll")
    public List<Car> getAllCars() {
        return serviceCar.getAllCars();
    }

    @PostMapping("/add")
    public Car createCar(@RequestBody Car car) {
        return serviceCar.createCar(car);
    }

    @PutMapping("/update/{carId}")
    public Car updateCar(@PathVariable Long carId, @RequestBody Car car) {
        return serviceCar.updateCar(carId, car);
    }

    @DeleteMapping("/delete/{carId}")
    public Boolean deleteCar(@PathVariable Long carId) {
        return serviceCar.deleteCar(carId);
    }

    @PostMapping("/addItems")
    public Car addItems(@RequestParam(name = "carId") Long carId, 
                       @RequestParam(name = "productId") Long productId,
                       @RequestParam(name = "quantity", defaultValue = "1") int quantity) {
        try {
            return serviceCar.addItems(carId, productId, quantity);
        } catch (RuntimeException e) {
            throw new RuntimeException("Error al añadir productos al carrito: " + e.getMessage());
        }
    }

    @GetMapping("/productQuantity/{carId}/{productId}")
    public int getProductQuantityInCart(@PathVariable Long carId, @PathVariable Long productId) {
        try {
            return serviceCar.getProductQuantityInCart(carId, productId);
        } catch (RuntimeException e) {
            throw new RuntimeException("Error al obtener la cantidad del producto: " + e.getMessage());
        }
    }

    @GetMapping("/summary/{carId}")
    public List<ProductCartSummary> getCartSummary(@PathVariable Long carId) {
        try {
            return serviceCar.getCartSummary(carId);
        } catch (RuntimeException e) {
            throw new RuntimeException("Error al obtener el resumen del carrito: " + e.getMessage());
        }
    }

    @PostMapping("/removeItems")
    public Car removeItems(@RequestParam(name = "carId") Long carId, 
                          @RequestParam(name = "productId") Long productId,
                          @RequestParam(name = "quantity") int quantity) {
        try {
            return serviceCar.removeItems(carId, productId, quantity);
        } catch (RuntimeException e) {
            throw new RuntimeException("Error al remover productos del carrito: " + e.getMessage());
        }
    }

}
