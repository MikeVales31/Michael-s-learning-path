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

import com.solera.supermarket.Model.Product;
import com.solera.supermarket.Service.ServiceProduct;

@RestController
@RequestMapping("/api/product")
public class ProductController {
    
    private final ServiceProduct productService;

    public ProductController(ServiceProduct productService) {
        this.productService = productService;
    }

    @GetMapping("/get/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @GetMapping("/getAll")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    @PostMapping("/add")
    public Product createProduct(@RequestBody Product product) {
        return productService.createProduct(product);
    }

    @PutMapping("/update/{productId}")
    public Product updateProduct(@PathVariable Long productId, @RequestBody Product product) {
        return productService.updateProduct(productId, product);
    }

    @DeleteMapping("/delete/{productId}")
    public Boolean deleteProduct(@PathVariable Long productId) {
        return productService.deleteProduct(productId);
    }


}
