package com.pranay.bloodbank_backend.controller;

import com.pranay.bloodbank_backend.entity.Hospital;
import com.pranay.bloodbank_backend.service.HospitalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hospitals")
@CrossOrigin("*")
public class HospitalController {

    @Autowired
    private HospitalService hospitalService;

    @GetMapping
    public List<Hospital> getAllHospitals() {
        return hospitalService.getAllHospitals();
    }

    @PostMapping
    public Hospital addHospital(
            @RequestBody Hospital hospital) {

        return hospitalService.saveHospital(hospital);
    }

    @GetMapping("/{id}")
    public Hospital getHospitalById(
            @PathVariable Long id) {

        return hospitalService.getHospitalById(id);
    }

    @PutMapping("/{id}")
    public Hospital updateHospital(
            @PathVariable Long id,
            @RequestBody Hospital hospital) {

        return hospitalService.updateHospital(id, hospital);
    }

    @DeleteMapping("/{id}")
    public String deleteHospital(
            @PathVariable Long id) {

        hospitalService.deleteHospital(id);

        return "Hospital Deleted Successfully";
    }
}