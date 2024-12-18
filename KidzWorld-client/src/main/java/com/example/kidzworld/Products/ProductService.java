package com.example.kidzworld.Products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    ProductRepository productRepository;

    public List<Product> getAllProducts(){
        return productRepository.findAll();
    }

    public Optional<Product> getProductById(String Id){
        return productRepository.findById(Id);
    }

    public List<Product> getProductByCategory(String category) {
        return productRepository.findByCategory(category);
    }

    public List<Product> getLimitedProducts(int limit) {
        List<Product> allProducts = productRepository.findAll();

        if (limit > allProducts.size()) {
            limit = allProducts.size();
        }

        return allProducts.subList(0, limit);
    }
}
