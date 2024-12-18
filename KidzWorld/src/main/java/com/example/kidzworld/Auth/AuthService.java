package com.example.kidzworld.Auth;

import com.example.kidzworld.utils.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.HashMap;

@Service
public class AuthService {

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    UserRepository userRepository;

    @Autowired
    JwtUtil jwtUtil;

    public ResponseEntity<HashMap<String, String>> login(String email, String password, HttpServletResponse response){

        HashMap<String, String> result = new HashMap<String, String>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser == null){
            result.put("message","User not Found");
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        if (!passwordEncoder.matches(password , existingUser.getPassword())){
            result.put("message","Invalid Password");
            return new ResponseEntity<>(result, HttpStatus.UNAUTHORIZED);
        }

        String token = jwtUtil.generateToken(email);
        Cookie cookie = new Cookie("JWT", token);
        cookie.setHttpOnly(false);
        cookie.setSecure(true);
        cookie.setPath("/");
        cookie.setMaxAge(3600);

        response.addCookie(cookie);

        result.put("message","Login Successful");
        result.put("token", token);
        return new ResponseEntity<>(result, HttpStatus.OK);

    }

    public ResponseEntity<HashMap<String, String>> register(String username, String email, String password){

        HashMap<String, String> result = new HashMap<String, String>();

        User existingUser = userRepository.findByEmail(email);
        if(existingUser != null){
            result.put("message","User Already Present");
            return new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }

        User newUser = new User(username , email, passwordEncoder.encode(password));
        userRepository.save(newUser);

        result.put("message", "User Created Successfully");
        return new ResponseEntity<>(result, HttpStatus.CREATED);

    }

}
