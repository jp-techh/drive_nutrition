package com.drivenutrition.spring.security.mongodb.payload.request;

import jakarta.validation.constraints.NotBlank;

public class UserDataRequest {
    @NotBlank
    public String user;

    @NotBlank
    public String item_name;

    @NotBlank
    public int calories;
}
