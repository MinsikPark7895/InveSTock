package com.user.service;

import com.user.entity.User;
import com.user.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class AuthService {

    private final UserRepository userRepository;

    public AuthService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public String login(String username, String password) {
        Optional<User> userOptional = userRepository.findByUsername(username);

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(password)) {
                return "생성된_JWT_토큰_문자열";
            }
        }
        
        throw new IllegalArgumentException("아이디 또는 비밀번호가 틀렸습니다.");
    }
}