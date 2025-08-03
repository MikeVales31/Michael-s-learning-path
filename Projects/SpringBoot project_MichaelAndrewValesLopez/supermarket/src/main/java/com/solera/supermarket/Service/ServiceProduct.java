package com.solera.supermarket.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.solera.supermarket.Model.Product;
import com.solera.supermarket.Repository.ProductRepository;

@Service
public class ServiceProduct {
    private final ProductRepository productRepository;

    public ServiceProduct(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElse(null);
    }

    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    public Product updateProduct(Long productId, Product product) {
        product.setId(productId);
        return productRepository.save(product);
    }

    public Boolean deleteProduct(Long productId) {
        productRepository.deleteById(productId);
        return !productRepository.existsById(productId);
    }

}
