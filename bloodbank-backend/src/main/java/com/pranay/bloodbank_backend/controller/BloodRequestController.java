package com.pranay.bloodbank_backend.controller;

import com.pranay.bloodbank_backend.entity.BloodRequest;
import com.pranay.bloodbank_backend.service.BloodRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/requests")
@CrossOrigin("*")
public class BloodRequestController {

    @Autowired
    private BloodRequestService bloodRequestService;

    @GetMapping
    public List<BloodRequest> getAllRequests() {
        return bloodRequestService.getAllRequests();
    }

    @PostMapping
    public BloodRequest createRequest(
            @RequestBody BloodRequest request) {

        return bloodRequestService.saveRequest(request);
    }
    @PutMapping("/approve/{id}")
    public BloodRequest approveRequest(@PathVariable Long id) {
        return bloodRequestService.approveRequest(id);
    }

    @PutMapping("/reject/{id}")
    public BloodRequest rejectRequest(@PathVariable Long id) {
        return bloodRequestService.rejectRequest(id);
    }
}