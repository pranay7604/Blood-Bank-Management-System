package com.pranay.bloodbank_backend.controller;

import com.pranay.bloodbank_backend.dto.LoginRequest;
import com.pranay.bloodbank_backend.dto.LoginResponse;
import com.pranay.bloodbank_backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "https://blood-bank-management-system-sepia.vercel.app")
public class AuthController {

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public LoginResponse login(
            @RequestBody LoginRequest request) {

        if ("admin".equals(request.getUsername())
                && "admin123".equals(request.getPassword())) {

            String token =
                    jwtUtil.generateToken(
                            request.getUsername());

            return new LoginResponse(token);
        }

        throw new RuntimeException(
                "Invalid Username or Password");
    }
}