package com.pranay.bloodbank_backend.controller;

import com.pranay.bloodbank_backend.entity.BloodStock;
import com.pranay.bloodbank_backend.repository.BloodStockRepository;
import com.pranay.bloodbank_backend.service.BloodStockService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bloodstock")
@CrossOrigin("*")
public class BloodStockController {

    @Autowired
    private BloodStockService bloodStockService;

    @Autowired
    private BloodStockRepository bloodStockRepository;

    @GetMapping
    public List<BloodStock> getAllBloodStock() {

        return bloodStockService.getAllBloodStock();
    }

    @PostMapping
    public BloodStock addBloodStock(
            @RequestBody BloodStock stock) {

        return bloodStockService.saveBloodStock(stock);
    }

    @GetMapping("/search")
    public List<BloodStock> searchBloodStock(
            @RequestParam String bloodGroup) {

        return bloodStockRepository
                .findByBloodGroupContainingIgnoreCase(
                        bloodGroup);
    }
    @GetMapping("/chart")
    public List<BloodStock> getChartData() {

        return bloodStockRepository.findAll();
    }
}