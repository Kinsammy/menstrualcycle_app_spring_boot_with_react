package com.example.mentrual_cycle.service;

import com.example.mentrual_cycle.data.dto.response.MenstrualResult;
import com.example.mentrual_cycle.data.models.Cycle;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CycleDataImpl implements CycleData {
    private final CycleService cycleService;
    @Override
    public MenstrualResult cyCleInfo(Cycle cycle) {
        LocalDate nextPeriod = cycleService.nextPeriod(cycle);
        LocalDate ovulationDate = cycleService.ovulationDate(cycle);
        List<LocalDate> fertileWindows = cycleService.fertileWindows(cycle);
        
        MenstrualResult mens = new MenstrualResult();
        mens.setNextPeriod(nextPeriod);
        mens.setOvulationDate(ovulationDate);
        mens.setFertileWindows(fertileWindows);
        return mens;
    }
}
