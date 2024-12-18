package com.example.kidzworld.Products;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product , String> {

    List<Product> findByIdIn(List<String> ids);

    List<Product> findByCategory(String category);

}
