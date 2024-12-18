package com.example.kidzworld.Orders;

import com.example.kidzworld.Auth.User;
import com.example.kidzworld.Auth.UserRepository;
import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrderService {

    @Autowired
    OrderRespository orderRespository;

    @Autowired
    UserRepository userRepository;

    public static final String KEY = "rzp_test_wrWBdn4mFAZoo8";
    public static final String KEYSECRET = "pZoQUDfO142Wm7TAlKjOmadM";
    public static final String CURRENCY = "USD";

    public TransactionDetails createTransaction(Double amount){
        try{

            JSONObject jsonObject = new JSONObject();
            jsonObject.put("amount", (int) (amount * 100));
            jsonObject.put("currency", CURRENCY);


            RazorpayClient razorpayClient = new RazorpayClient(KEY, KEYSECRET);
            Order order = razorpayClient.orders.create(jsonObject);
            System.out.println(order);

            return this.prepareTransaction(order);
        }catch(Exception e){
            System.out.println(e.getMessage());
        }
        return null;
    }

    public TransactionDetails prepareTransaction(Order order){
        String orderId = order.get("id");
        String currency = order.get("currency");
        Integer amountInCents = order.get("amount");
        Double amount = amountInCents / 100.0;

        return new TransactionDetails(orderId, currency, amount , KEY);
    }

    public ResponseEntity<HashMap<String, String>> addOrder(OrderDetails order, String email){

        HashMap<String, String> result = new HashMap<String, String>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            result.put("message" , "User not found");
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        OrderDetails newOrder = new OrderDetails(order.getOrderNumber(), order.getOrderDate(), order.getProducts(), order.getCustomerName(), order.getPaymentMode(), order.getAddress());

        OrderDetails savedOrder = orderRespository.save(newOrder);

        List<String> userOrders = existingUser.getOrders();

        userOrders.add(savedOrder.getId());
        existingUser.setOrders(userOrders);

        userRepository.save(existingUser);

        result.put("message", "Order added Successfully..!");
        return new ResponseEntity<>(result, HttpStatus.CREATED);
    }

    public List<OrderDetails> getOrders(String email) {
        User existingUser = userRepository.findByEmail(email);

        if (existingUser == null || existingUser.getOrders().isEmpty()) {
            return Collections.emptyList();
        }

        List<String> orderIds = existingUser.getOrders();
        List<OrderDetails> result = orderRespository.findAllById(orderIds);

        return result;
    }

    public OrderDetails getOrder(String email, String orderNumber){
        User existingUser = userRepository.findByEmail(email);

        if(existingUser == null){
            return null;
        }

        return orderRespository.findByOrderNumber(orderNumber);
    }

}
