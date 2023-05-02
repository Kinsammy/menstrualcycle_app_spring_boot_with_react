package com.example.mentrual_cycle.service;

import com.example.mentrual_cycle.data.dto.response.MenstrualResult;
import com.example.mentrual_cycle.data.models.Cycle;

import java.time.LocalDate;
import java.util.List;

public interface CycleData {
    MenstrualResult cyCleInfo(Cycle cycle);
}
