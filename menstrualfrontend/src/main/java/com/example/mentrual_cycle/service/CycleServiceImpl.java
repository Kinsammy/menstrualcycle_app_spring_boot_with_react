package com.example.mentrual_cycle.service;

import com.example.mentrual_cycle.data.models.Cycle;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class CycleServiceImpl implements CycleService{
    @Override
    public LocalDate nextPeriod(Cycle cycle) {
        return cycle.getPeriodStartDate().plusDays(cycle.getCycleLength());
    }

    @Override
    public LocalDate ovulationDate(Cycle cycle) {
        return cycle.getPeriodStartDate().plusDays(14);
    }

    @Override
    public List<LocalDate> fertileWindows(Cycle cycle) {
        List<LocalDate> fertileWindows = new ArrayList<>();
        for (int day =1; day <= 5; day++){
            LocalDate daysBeforeOvulationDay = ovulationDate(cycle).minusDays(day);
            fertileWindows.add(daysBeforeOvulationDay);
        }
        return fertileWindows;
    }

}
