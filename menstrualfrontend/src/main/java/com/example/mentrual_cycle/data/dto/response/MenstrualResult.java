package com.example.mentrual_cycle.data.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MenstrualResult {
    private LocalDate nextPeriod;
    private LocalDate ovulationDate;
    private List<LocalDate> fertileWindows;
}
