package com.pranay.bloodbank_backend.controller;

import com.pranay.bloodbank_backend.entity.Donor;
import com.pranay.bloodbank_backend.service.DonorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/donors")
@CrossOrigin("*")
public class DonorController {

    @Autowired
    private DonorService donorService;

    @GetMapping
    public List<Donor> getAllDonors() {
        return donorService.getAllDonors();
    }

    @PostMapping
    public Donor addDonor(@RequestBody Donor donor) {
        return donorService.saveDonor(donor);
    }

    @GetMapping("/{id}")
    public Donor getDonorById(@PathVariable Long id) {
        return donorService.getDonorById(id);
    }

    @DeleteMapping("/{id}")
    public String deleteDonor(@PathVariable Long id) {
        donorService.deleteDonor(id);
        return "Donor Deleted Successfully";
    }

    @PutMapping("/{id}")
    public Donor updateDonor(
            @PathVariable Long id,
            @RequestBody Donor donor) {

        return donorService.updateDonor(id, donor);
    }
}