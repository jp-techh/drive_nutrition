package com.drivenutrition.spring.security.mongodb.controllers;

import com.drivenutrition.spring.security.mongodb.models.FoodItem;
import com.drivenutrition.spring.security.mongodb.models.User;
import com.drivenutrition.spring.security.mongodb.models.UserData;
import com.drivenutrition.spring.security.mongodb.repository.FoodItemsRepository;
import com.drivenutrition.spring.security.mongodb.repository.UserDataRepository;
import com.drivenutrition.spring.security.mongodb.security.services.UserDetailsImpl;
import com.drivenutrition.spring.security.mongodb.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.List;

//for Angular Client (withCredentials)
//@CrossOrigin(origins = "http://localhost:8081", maxAge = 3600, allowCredentials="true")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class APIController {

  //List<FoodItem> items = new ArrayList<FoodItem>();
  @Autowired
  FoodItemsRepository itemsRepository;

  @Autowired
  UserDataRepository userDataRepository;

  @Autowired
  UserRepository userRepository;

  @GetMapping("/all")
  public String allAccess() {
    return "Public Content.";
  }

  @GetMapping("/user")
  //@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
  }

  @GetMapping("/user/get_items")
  public List<FoodItem>  getItems(){
    return itemsRepository.findAll();
  }

  @PostMapping("/user/add_user_data")
  public UserData addUserData(@RequestBody UserData userData) {
    if (itemsRepository.existsByName(userData.item_name)) {
      userDataRepository.save(userData);
      return userData;
    }

    return null;
  }

  @GetMapping("/user/get_user_data")
  public List<UserData> getUserData(@RequestParam("user") String username){
    return userDataRepository.findByUser(username);
  }

  @GetMapping("/user/recommendations")
  public List<FoodItem> getRecommendations(@RequestParam("user") String username) {
    List <FoodItem> items = itemsRepository.findAll();

    User userData = userRepository.findByUsername(username)
            .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
    UserDetailsImpl user = UserDetailsImpl.build(userData);

    float bmi = (float) user.getWeight() / ( ((float) user.getHeight() /100) * ((float) user.getHeight() /100) );
    float max_cal_intake = user.getGender().equals("male") ? 1500 : 1000;
    float no_of_meals_per_day = 6;

    if(bmi < 18.5) {
      max_cal_intake += 1000;
      System.out.println("You are underweight!");
    }
    else if(bmi < 25) {
      max_cal_intake += 500;
      System.out.println("You are normal:)");
    }
    else if(bmi < 30) {
      max_cal_intake += 250;
      System.out.println("You are overweight!");
    }
    else {
      max_cal_intake += 0;
      System.out.println("You are obese!");
    }

    float per_meal_intake = max_cal_intake/no_of_meals_per_day;
    List <FoodItem> output = new ArrayList<FoodItem>();

    for (int i = 0; i < items.size(); i++) {
      FoodItem item = items.get(i);

      if ( (item.getCalories() < per_meal_intake - 100 ) ||
           (item.getCalories() > per_meal_intake + 100 ) )
      {
        continue;
      }

      if ( user.getDiet().equals("vegetarian") && !item.getCategory().equals("veg")) {
        continue;
      }

      output.add(item);
    }
    return output;
  }
}
