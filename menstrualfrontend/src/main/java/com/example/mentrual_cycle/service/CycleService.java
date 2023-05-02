package com.example.mentrual_cycle.service;


import com.example.mentrual_cycle.data.models.Cycle;

import java.time.LocalDate;
import java.util.List;

public interface CycleService {
    LocalDate nextPeriod(Cycle cycle);
    LocalDate ovulationDate(Cycle cycle);
    List<LocalDate> fertileWindows(Cycle cycle);

}
