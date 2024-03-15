package com.drivenutrition.spring.security.mongodb.repository;

import com.drivenutrition.spring.security.mongodb.models.FoodItem;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.math.BigInteger;

public interface FoodItemsRepository extends MongoRepository<FoodItem, BigInteger> {
    Boolean existsByName(String name);
}
