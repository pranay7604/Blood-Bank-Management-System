package com.pranay.bloodbank_backend.controller;

import com.pranay.bloodbank_backend.service.AIService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/ai")
@CrossOrigin("*")
public class AIController {

    @Autowired
    private AIService aiService;

    @GetMapping("/ask")
    public String askQuestion(
            @RequestParam String question) {

        return aiService.askAI(question);
    }
}