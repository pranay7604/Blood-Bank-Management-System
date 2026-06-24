package com.pranay.bloodbank_backend.repository;

import com.pranay.bloodbank_backend.entity.Donor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorRepository extends JpaRepository<Donor, Long> {
}