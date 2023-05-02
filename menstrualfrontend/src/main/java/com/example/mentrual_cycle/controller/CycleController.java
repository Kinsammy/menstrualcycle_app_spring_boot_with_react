package com.example.mentrual_cycle.controller;

import com.example.mentrual_cycle.data.dto.response.MenstrualResult;
import com.example.mentrual_cycle.data.models.Cycle;
import com.example.mentrual_cycle.service.CycleData;
import com.example.mentrual_cycle.service.CycleService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/v1/cycle")
@CrossOrigin(origins = "*")
@AllArgsConstructor
public class CycleController {
    private final CycleService cycleService;
    private final CycleData cycleData;

    @PostMapping("/getnextperiod")
    public LocalDate getNextPeriod(@RequestBody Cycle cycle){
        return cycleService.nextPeriod(cycle);
    }

    @PostMapping("/cycleinfo")
    public MenstrualResult cycleInfo(@RequestBody Cycle cycle){
        return cycleData.cyCleInfo(cycle);
    }

}
