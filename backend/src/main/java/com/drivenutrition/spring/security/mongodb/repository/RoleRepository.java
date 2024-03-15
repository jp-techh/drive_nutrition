package com.drivenutrition.spring.security.mongodb.repository;

import java.util.Optional;

import com.drivenutrition.spring.security.mongodb.models.ERole;
import com.drivenutrition.spring.security.mongodb.models.Role;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
