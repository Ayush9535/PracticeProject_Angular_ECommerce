package com.example.kidzworld.Auth;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Document(collection = "users")
public class User {

    @Id
    private String id;
    private String username;
    private String email;
    private String password;
    private List<String> cart;
    private List<Address> savedAddresses;
    private List<String> orders;

    public List<String> getOrders() {
        return orders;
    }

    public void setOrders(List<String> orders) {
        this.orders = orders;
    }

    public User(String username, String email, String password){
        this.username = username;
        this.email = email;
        this.password = password;
        this.cart = new ArrayList<String>();
        this.savedAddresses = new ArrayList<Address>();
        this.orders = new ArrayList<String>();
    }

    public String getPassword(){
        return this.password;
    }

    public List<String> getCart(){
        return this.cart;
    }

    public void setCart(List<String> newCart){
        this.cart = newCart;
    }

    public List<Address> getSavedAddresses() {
        return savedAddresses;
    }

    public void setSavedAddresses(List<Address> savedAddresses) {
        this.savedAddresses = savedAddresses;
    }
}
