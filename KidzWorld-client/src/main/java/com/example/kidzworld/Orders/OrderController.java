package com.example.kidzworld.Orders;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
public class OrderController {

    @Autowired
    OrderService orderService;

    @PostMapping({"/createTransaction"})
    public TransactionDetails createTransaction(@RequestBody HashMap<String, Double> body){
        return orderService.createTransaction(body.get("amount"));
    }

    @PostMapping("/addOrder")
    public ResponseEntity<HashMap<String, String>> addOrder(@RequestBody OrderDetails order, HttpServletRequest request){
        String email = (String) request.getAttribute("user");
        return orderService.addOrder(order, email);
    }

    @GetMapping("/getOrders")
    public List<OrderDetails> getOrders(HttpServletRequest request){
        String email = (String) request.getAttribute("user");
        return orderService.getOrders(email);
    }

    @GetMapping("/getOrder/{orderNumber}")
    public OrderDetails getOrder(HttpServletRequest request, @PathVariable String orderNumber){
        String email = (String) request.getAttribute("user");
        return orderService.getOrder(email, orderNumber);
    }

}
