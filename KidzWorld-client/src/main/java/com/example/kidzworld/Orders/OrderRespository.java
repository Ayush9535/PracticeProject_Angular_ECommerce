package com.example.kidzworld.Orders;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRespository extends MongoRepository<OrderDetails, String> {

    OrderDetails findByOrderNumber(String OrderNumber);

}
