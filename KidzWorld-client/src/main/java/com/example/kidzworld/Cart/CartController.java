package com.example.kidzworld.Cart;

import com.example.kidzworld.Auth.Address;
import com.example.kidzworld.Products.Product;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class CartController {

    @Autowired
    CartService cartService;

    @GetMapping("/getCart")
    public List<CartItem> getCart(HttpServletRequest request){
        String email = (String) request.getAttribute("user");
        return cartService.getCartItems(email);
    }

    @PostMapping("/addToCart/{productId}")
    public ResponseEntity<HashMap<String, String>> addToCart(HttpServletRequest request , @PathVariable String productId){
        String email = (String) request.getAttribute("user");
        return cartService.addToCart(email, productId);
    }

    @PostMapping("/removeFromCart/{productId}")
    public ResponseEntity<HashMap<String, String>> removeFromCart(HttpServletRequest request , @PathVariable String productId){
        String email = (String) request.getAttribute("user");
        return cartService.removeFromCart(email, productId);
    }

    @PostMapping("/removeCompletelyFromCart/{productId}")
    public ResponseEntity<HashMap<String, String>> removeCompletelyFromCart(HttpServletRequest request , @PathVariable String productId){
        String email = (String) request.getAttribute("user");
        return cartService.removeCompletelyFromCart(email, productId);
    }

    @GetMapping("/clearCart")
    public ResponseEntity<HashMap<String, String>> clearCart(HttpServletRequest request){
        String email = (String) request.getAttribute("user");
        return cartService.clearCart(email);
    }

    @GetMapping("/getSavedAddresses")
    public List<Address> getSavedAddresses(HttpServletRequest request){
        String email = (String) request.getAttribute("user");
        return cartService.getSavedAddresses(email);
    }

    @PostMapping("/addSavedAddress")
    public ResponseEntity<HashMap<String, String>> addSavedAddress(HttpServletRequest request, @RequestBody Address newAdd){
        String email = (String) request.getAttribute("user");
        return cartService.addSavedAddress(email, newAdd);
    }

    @PostMapping("/removeSavedAddress")
    public ResponseEntity<HashMap<String, String>> removeSavedAddress(HttpServletRequest request, @RequestBody Address add){
        String email = (String) request.getAttribute("user");
        return cartService.removeSavedAddress(email, add);
    }
}
