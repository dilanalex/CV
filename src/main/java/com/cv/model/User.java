package com.cv.model;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.NonNull;

import java.sql.Timestamp;

public class User {
    @Id
    @GeneratedValue
    private Long id;
    @NonNull
    private String name;
    private String email;
    private Timestamp createTime;
    private Timestamp lastModifyTime;

}
