package com.example.kidzworld.Orders;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TransactionDetails {

    String orderId;
    String currency;
    Double amount;
    String Key;

    public TransactionDetails(String orderId, String currency, Double amount, String key) {
        this.orderId = orderId;
        this.currency = currency;
        this.amount = amount;
        Key = key;
    }


    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getKey() {
        return Key;
    }

    public void setKey(String key) {
        Key = key;
    }
}
