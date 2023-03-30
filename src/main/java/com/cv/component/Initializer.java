package com.cv.component;

import com.cv.model.CV;
import com.cv.repository.CVRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.stream.Stream;

@Component
public class Initializer implements CommandLineRunner {

    private final CVRepository cvRepository;

    public Initializer(CVRepository cvRepository) {
        this.cvRepository = cvRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Stream.of("Manuja", "Anuruddha", "Dilan").forEach(name ->
                cvRepository.save(new CV(name))
        );

        cvRepository.findAll().forEach(System.out::println);
    }
}
