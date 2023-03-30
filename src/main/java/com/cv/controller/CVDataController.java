package com.cv.controller;

import com.cv.model.CV;
import com.cv.repository.CVRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;


@RestController
public class CVDataController{
    private final Logger log = LoggerFactory.getLogger(CVDataController.class);

    @Autowired
    private CVRepository cvRepository;

    @RequestMapping(path ="/test", method= RequestMethod.GET)
    public long displaySum(){
        return 100;
    }

    @GetMapping("/users")
    Collection<CV> groups() {

        return cvRepository.findAll();
    }

}
