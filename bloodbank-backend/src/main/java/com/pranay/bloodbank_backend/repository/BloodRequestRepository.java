package com.pranay.bloodbank_backend.repository;

import com.pranay.bloodbank_backend.entity.BloodRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BloodRequestRepository
        extends JpaRepository<BloodRequest, Long> {
}