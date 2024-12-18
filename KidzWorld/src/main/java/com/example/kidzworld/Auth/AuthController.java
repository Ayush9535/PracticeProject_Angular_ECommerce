package com.example.kidzworld.Auth;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<HashMap<String, String>> login(@RequestBody Map<String, String> user, HttpServletResponse response){
        return authService.login(user.get("email"), user.get("password"), response);
    }

    @PostMapping("/register")
    public ResponseEntity<HashMap<String, String>> register(@RequestBody Map<String, String> user){
        return authService.register(user.get("username"), user.get("email"), user.get("password"));
    }

}
