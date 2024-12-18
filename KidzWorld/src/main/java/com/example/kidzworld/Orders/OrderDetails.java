package com.example.kidzworld.Orders;

import com.example.kidzworld.Auth.Address;
import com.example.kidzworld.Cart.CartItem;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Getter
@Setter
@Document(collection = "orders")
public class OrderDetails {

    @Id
    String id;
    String orderNumber;
    Date orderDate;
    String paymentMode;
    String customerName;
    Address address;
    List<CartItem> products;

    public OrderDetails(String orderNumber, Date orderDate, List<CartItem> products, String paymentMode, String customerName, Address address) {
        this.orderNumber = orderNumber;
        this.orderDate = orderDate;
        this.products = products;
        this.paymentMode = paymentMode;
        this.customerName = customerName;
        this.address = address;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getOrderNumber() {
        return orderNumber;
    }

    public void setOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
    }

    public Date getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(Date orderDate) {
        this.orderDate = orderDate;
    }

    public String getPaymentMode() {
        return paymentMode;
    }

    public void setPaymentMode(String paymentMode) {
        this.paymentMode = paymentMode;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public List<CartItem> getProducts() {
        return products;
    }

    public void setProducts(List<CartItem> products) {
        this.products = products;
    }
}
