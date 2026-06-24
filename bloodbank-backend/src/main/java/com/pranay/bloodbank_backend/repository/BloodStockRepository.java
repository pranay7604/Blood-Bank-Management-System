package com.pranay.bloodbank_backend.repository;

import com.pranay.bloodbank_backend.entity.BloodStock;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface BloodStockRepository
        extends JpaRepository<BloodStock, Long> {

    Optional<BloodStock> findByBloodGroup(
            String bloodGroup);

    List<BloodStock>
    findByBloodGroupContainingIgnoreCase(
            String bloodGroup);
}