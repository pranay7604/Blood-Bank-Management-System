package com.pranay.bloodbank_backend.service;

import com.pranay.bloodbank_backend.entity.Hospital;
import com.pranay.bloodbank_backend.repository.HospitalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HospitalService {

    @Autowired
    private HospitalRepository hospitalRepository;

    public List<Hospital> getAllHospitals() {
        return hospitalRepository.findAll();
    }

    public Hospital saveHospital(Hospital hospital) {
        return hospitalRepository.save(hospital);
    }

    public Hospital getHospitalById(Long id) {
        return hospitalRepository.findById(id).orElse(null);
    }

    public Hospital updateHospital(Long id, Hospital hospitalDetails) {

        Hospital hospital =
                hospitalRepository.findById(id).orElse(null);

        if(hospital != null) {

            hospital.setHospitalName(
                    hospitalDetails.getHospitalName());

            hospital.setContact(
                    hospitalDetails.getContact());

            hospital.setAddress(
                    hospitalDetails.getAddress());

            return hospitalRepository.save(hospital);
        }

        return null;
    }

    public void deleteHospital(Long id) {
        hospitalRepository.deleteById(id);
    }
}