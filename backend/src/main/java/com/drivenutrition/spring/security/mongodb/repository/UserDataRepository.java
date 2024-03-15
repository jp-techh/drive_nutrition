package com.drivenutrition.spring.security.mongodb.repository;

import com.drivenutrition.spring.security.mongodb.models.UserData;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface UserDataRepository extends MongoRepository<UserData, String> {
    List<UserData> findByUser(String user);

}