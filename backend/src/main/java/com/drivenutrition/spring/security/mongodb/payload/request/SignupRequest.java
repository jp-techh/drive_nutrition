package com.drivenutrition.spring.security.mongodb.payload.request;

import java.util.Set;

import jakarta.validation.constraints.*;
import org.hibernate.validator.constraints.Range;

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  private Set<String> roles;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;

  @Range(min = 18, max = 100)
  private int age;

  @Range(min = 50, max = 300)
  private int height;

  @Range(min = 25, max = 300)
  private int weight;

  @NotBlank
  @Size(max = 10)
  private String gender;

  @NotBlank
  @Size(max = 50)
  private String diet;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<String> getRoles() {
    return this.roles;
  }

  public void setRole(Set<String> roles) {
    this.roles = roles;
  }

  public int getAge() {
    return this.age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public void setHeight(int height) {
    this.height = height;
  }

  public int getHeight() {
    return height;
  }

  public void setWeight(int weight) {
    this.weight = weight;
  }

  public int getWeight() {
    return weight;
  }

  public void setGender(String gender) {
    this.gender = gender;
  }

  public String getGender() {
    return gender;
  }

  public void setDiet(String diet) {
    this.diet = diet;
  }

  public String getDiet() {
    return diet;
  }
}
