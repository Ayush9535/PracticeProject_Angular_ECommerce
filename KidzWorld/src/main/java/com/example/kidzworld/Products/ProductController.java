package com.example.kidzworld.Products;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
public class ProductController {

    @Autowired
    ProductService productService;

    @GetMapping("/getProducts")
    public List<Product> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/getProduct/{id}")
    public Optional<Product> getProductById(@PathVariable String id){
        return productService.getProductById(id);
    }

    @GetMapping("/getProducts/{category}")
    public List<Product> getProductByCategory(@PathVariable String category){
        return productService.getProductByCategory(category);
    }

    @GetMapping("/getLimitedProducts/{limit}")
    public List<Product> getlimitedproducts(@PathVariable int limit){
        return productService.getLimitedProducts(limit);
    }
}

