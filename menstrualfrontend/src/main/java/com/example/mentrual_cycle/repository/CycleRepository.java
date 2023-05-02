package com.example.mentrual_cycle.repository;

import com.example.mentrual_cycle.data.models.Cycle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

@Repository
public interface CycleRepository extends JpaRepository<Cycle, Long> {
}
