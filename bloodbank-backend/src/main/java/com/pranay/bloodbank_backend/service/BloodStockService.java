package com.pranay.bloodbank_backend.service;

import com.pranay.bloodbank_backend.entity.BloodStock;
import com.pranay.bloodbank_backend.repository.BloodStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodStockService {

    @Autowired
    private BloodStockRepository bloodStockRepository;

    public List<BloodStock> getAllBloodStock() {
        return bloodStockRepository.findAll();
    }

    public BloodStock saveBloodStock(BloodStock stock) {
        return bloodStockRepository.save(stock);
    }
}