package com.example.kidzworld.Cart;

import com.example.kidzworld.Auth.Address;
import com.example.kidzworld.Auth.User;
import com.example.kidzworld.Auth.UserRepository;
import com.example.kidzworld.Products.Product;
import com.example.kidzworld.Products.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.aggregation.ArithmeticOperators;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CartService {

    @Autowired
    UserRepository userRepository;

    @Autowired
    ProductRepository productRepository;

    public ResponseEntity<HashMap<String, String>> addToCart(String email, String productId){

        HashMap<String, String> result = new HashMap<String, String>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            result.put("message" , "User not found");
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        List<String> cart = existingUser.getCart();
        cart.add(productId);
        existingUser.setCart(cart);
        userRepository.save(existingUser);

        result.put("message" , "Item added to cart.!!");
        return new ResponseEntity<>(result, HttpStatus.OK);

    }


    public ResponseEntity<HashMap<String, String>> removeFromCart(String email, String productId){

        HashMap<String, String> result = new HashMap<String, String>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            result.put("message" , "User not found");
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        List<String> cart = existingUser.getCart();
        cart.remove(productId);
        existingUser.setCart(cart);
        userRepository.save(existingUser);

        result.put("message" , "Item removed from cart.!!");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    public ResponseEntity<HashMap<String, String>> removeCompletelyFromCart(String email, String productId){

        HashMap<String, String> result = new HashMap<String, String>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            result.put("message" , "User not found");
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        List<String> cart = existingUser.getCart();

        cart.removeIf(id -> id.equals(productId));

        existingUser.setCart(cart);
        userRepository.save(existingUser);

        result.put("message" , "Item removed from cart.!!");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    public List<CartItem> getCartItems(String email) {
        List<CartItem> result = new ArrayList<>();

        User existingUser = userRepository.findByEmail(email);
        if (existingUser == null) {
            return result;
        }

        List<String> cart = existingUser.getCart();
        Map<String, Integer> productQuantityMap = new HashMap<>();

        // Count the frequency of each product ID
        for (String productId : cart) {
            productQuantityMap.put(productId, productQuantityMap.getOrDefault(productId, 0) + 1);
        }

        // Fetch products and create CartItem objects
        for (Map.Entry<String, Integer> entry : productQuantityMap.entrySet()) {
            String productId = entry.getKey();
            int quantity = entry.getValue();
            productRepository.findById(productId).ifPresent(product -> {
                CartItem cartItem = new CartItem(product, quantity);
                result.add(cartItem);
            });
        }

        return result;
    }


    public ResponseEntity<HashMap<String, String>> clearCart(String email){

        HashMap<String, String> result = new HashMap<String, String>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            result.put("message" , "User not found");
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        existingUser.getCart().clear();
        userRepository.save(existingUser);

        result.put("message" , "Cart cleared.!!");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    public List<Address> getSavedAddresses(String email){
        List<Address> result = new ArrayList<>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            return result;
        }

        result = existingUser.getSavedAddresses();
        return result;
    }

    public ResponseEntity<HashMap<String , String>> addSavedAddress(String email , Address newAdd){
        HashMap<String, String> result = new HashMap<>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            result.put("message" , "User not found.!");
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        List<Address> oldAdd = existingUser.getSavedAddresses();
        oldAdd.add(newAdd);
        existingUser.setSavedAddresses(oldAdd);
        userRepository.save(existingUser);

        result.put("message" , "Address saved");
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    public ResponseEntity<HashMap<String, String>> removeSavedAddress(String email, Address add){
        HashMap<String, String> result = new HashMap<>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            result.put("message", "User not found..!");
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        List<Address> oldAdd = existingUser.getSavedAddresses();
        oldAdd.remove(add);
        existingUser.setSavedAddresses(oldAdd);
        userRepository.save(existingUser);

        result.put("message", "Address Removed..!");
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
