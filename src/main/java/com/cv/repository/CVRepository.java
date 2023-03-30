package com.cv.repository;

import com.cv.model.CV;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CVRepository extends JpaRepository<CV, Long> {
    List<CV> findBySkill(String skill);
    CV findByName(String name);
}
