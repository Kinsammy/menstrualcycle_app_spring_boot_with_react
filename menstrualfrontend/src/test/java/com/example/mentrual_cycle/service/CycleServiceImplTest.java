package com.example.mentrual_cycle.service;

import com.example.mentrual_cycle.data.models.Cycle;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class CycleServiceImplTest {
//    private CycleService cycleService;
    private Cycle cycle;

    @BeforeEach
    void setUp() {
        cycle = new Cycle();
        cycle.setPeriodStartDate("01/04/2023");
        cycle.setCycleLength(28);
    }

//    @Test
//    void nextPeriodTest() {
//        String response = String.valueOf(cycleService.nextPeriod(cycle));
//        assertThat(response).isEqualTo("29/04/2023");
//    }

    @Test
    void ovulationDate() {
    }

    @Test
    void fertileWindow() {
    }
}