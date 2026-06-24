package com.pranay.bloodbank_backend.service;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Scanner;

@Service
public class AIService {

    @Value("${gemini.api.key}")
    private String apiKey;

    public String askAI(String question) {

        try {

            String endpoint =
                    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key="
                            + apiKey;

            URL url = new URL(endpoint);

            HttpURLConnection connection =
                    (HttpURLConnection) url.openConnection();

            connection.setRequestMethod("POST");
            connection.setRequestProperty(
                    "Content-Type",
                    "application/json"
            );

            connection.setDoOutput(true);

            String requestBody =
                    """
                    {
                      "contents": [
                        {
                          "parts": [
                            {
                              "text": "%s"
                            }
                          ]
                        }
                      ]
                    }
                    """.formatted(question);

            try (OutputStream os =
                         connection.getOutputStream()) {

                os.write(
                        requestBody.getBytes(
                                StandardCharsets.UTF_8
                        )
                );
            }

            int responseCode = connection.getResponseCode();

            System.out.println("Response Code: " + responseCode);

            Scanner scanner;

            if (responseCode >= 200 && responseCode < 300) {

                scanner = new Scanner(
                        connection.getInputStream()
                );

            } else {

                scanner = new Scanner(
                        connection.getErrorStream()
                );
            }

            StringBuilder response =
                    new StringBuilder();

            while(scanner.hasNext()) {

                response.append(scanner.nextLine());
            }
            System.out.println(response.toString());
            JsonObject json =
                    JsonParser.parseString(
                            response.toString()
                    ).getAsJsonObject();

            if (!json.has("candidates")) {
                return response.toString();
            }
            JsonArray candidates =
                    json.getAsJsonArray(
                            "candidates"
                    );

            return candidates
                    .get(0)
                    .getAsJsonObject()
                    .getAsJsonObject("content")
                    .getAsJsonArray("parts")
                    .get(0)
                    .getAsJsonObject()
                    .get("text")
                    .getAsString();

        } catch(Exception e) {

            e.printStackTrace();

            return "AI Service Error";
        }
    }
}