package com.drivenutrition.spring.security.mongodb.models;

import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigInteger;

@Document(collection = "userdata")
public class UserData {
        
        public String user;
        public String item_name;
        public int calories;

        public String date;
}
