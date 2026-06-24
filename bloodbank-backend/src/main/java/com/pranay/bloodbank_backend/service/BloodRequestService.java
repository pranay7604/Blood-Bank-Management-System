package com.pranay.bloodbank_backend.service;

import com.pranay.bloodbank_backend.entity.BloodRequest;
import com.pranay.bloodbank_backend.entity.BloodStock;
import com.pranay.bloodbank_backend.repository.BloodRequestRepository;
import com.pranay.bloodbank_backend.repository.BloodStockRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BloodRequestService {

    @Autowired
    private BloodRequestRepository bloodRequestRepository;

    @Autowired
    private BloodStockRepository bloodStockRepository;

    public List<BloodRequest> getAllRequests() {
        return bloodRequestRepository.findAll();
    }

    public BloodRequest saveRequest(BloodRequest request) {

        request.setStatus("PENDING");

        return bloodRequestRepository.save(request);
    }

    public BloodRequest approveRequest(Long requestId) {

        BloodRequest request =
                bloodRequestRepository.findById(requestId)
                        .orElse(null);

        if (request == null) {
            return null;
        }

        BloodStock stock =
                bloodStockRepository.findByBloodGroup(
                                request.getBloodGroup())
                        .orElse(null);

        if (stock == null) {
            return null;
        }

        if (stock.getUnits() < request.getUnitsRequired()) {
            throw new RuntimeException(
                    "Insufficient Blood Stock");
        }

        stock.setUnits(
                stock.getUnits()
                        - request.getUnitsRequired());

        bloodStockRepository.save(stock);

        request.setStatus("APPROVED");

        return bloodRequestRepository.save(request);
    }

    public BloodRequest rejectRequest(Long requestId) {

        BloodRequest request =
                bloodRequestRepository.findById(requestId)
                        .orElse(null);

        if (request != null) {

            request.setStatus("REJECTED");

            return bloodRequestRepository.save(request);
        }

        return null;
    }
}