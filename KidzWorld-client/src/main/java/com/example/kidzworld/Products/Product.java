package com.example.kidzworld.Products;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "products")
public class Product {

    @Id
    private String id;
    private String title;
    private String description;
    private String imgUrl;
    private float price;
    private String category;

    Product(String title, String description, String imgUrl, float price, String category){
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
        this.price = price;
        this.category = category;
    }

    public String getId() {
        return id;
    }
}
