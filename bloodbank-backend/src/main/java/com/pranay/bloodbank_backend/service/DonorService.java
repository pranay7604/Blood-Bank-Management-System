package com.pranay.bloodbank_backend.service;

import com.pranay.bloodbank_backend.entity.Donor;
import com.pranay.bloodbank_backend.repository.DonorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorService {

    @Autowired
    private DonorRepository donorRepository;

    public List<Donor> getAllDonors() {
        return donorRepository.findAll();
    }

    public Donor saveDonor(Donor donor) {
        return donorRepository.save(donor);
    }

    public Donor getDonorById(Long id) {
        return donorRepository.findById(id).orElse(null);
    }

    public void deleteDonor(Long id) {
        donorRepository.deleteById(id);
    }

    public Donor updateDonor(Long id, Donor donorDetails) {

        Donor donor = donorRepository.findById(id).orElse(null);

        if(donor != null) {
            donor.setDonorName(donorDetails.getDonorName());
            donor.setBloodGroup(donorDetails.getBloodGroup());
            donor.setPhoneNumber(donorDetails.getPhoneNumber());

            return donorRepository.save(donor);
        }

        return null;
    }

}