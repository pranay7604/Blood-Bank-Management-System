package com.pranay.bloodbank_backend.controller;

import com.pranay.bloodbank_backend.repository.BloodRequestRepository;
import com.pranay.bloodbank_backend.repository.BloodStockRepository;
import com.pranay.bloodbank_backend.repository.DonorRepository;
import com.pranay.bloodbank_backend.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
@CrossOrigin("*")
public class DashboardController {

    @Autowired
    private DonorRepository donorRepository;

    @Autowired
    private HospitalRepository hospitalRepository;

    @Autowired
    private BloodRequestRepository bloodRequestRepository;

    @Autowired
    private BloodStockRepository bloodStockRepository;

    @GetMapping
    public Map<String, Object> getDashboardData() {

        Map<String, Object> dashboard = new HashMap<>();

        dashboard.put("totalDonors",
                donorRepository.count());

        dashboard.put("totalHospitals",
                hospitalRepository.count());

        dashboard.put("totalRequests",
                bloodRequestRepository.count());

        dashboard.put("totalBloodStock",
                bloodStockRepository.count());

        return dashboard;
    }
}