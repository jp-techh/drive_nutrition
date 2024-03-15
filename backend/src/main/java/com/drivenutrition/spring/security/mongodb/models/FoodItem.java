package com.drivenutrition.spring.security.mongodb.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

@Document(collection = "fooditems")
public class FoodItem {
    private BigInteger id;
    private String name;
    private  int calories;
    private String category;

    FoodItem(BigInteger id, String name, int calories, String category) {
        this.id = id;
        this.name = name;
        this.calories = calories;
        this.category = category;
    }

    public int getCalories() {
        return calories;
    }

    public BigInteger getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getCategory() {
        return category;
    }
}
