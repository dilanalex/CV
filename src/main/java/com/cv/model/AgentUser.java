package com.cv.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.NonNull;

public class AgentUser extends User{

    @Id
    @GeneratedValue
    private Long id;

    private String department;

    private String group;

}
