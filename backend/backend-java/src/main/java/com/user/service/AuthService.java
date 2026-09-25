package com.user.service;

import org.springframework.stereotype.Service;

@Service
public class AuthService {
    public String login(String username, String password) {
        boolean isMatched = true;

        if (isMatched) {
            return "생성된_JWT_토큰_문자열";
        } else {
            throw new IllegalArgumentException("아이디 또는 비밀번호가 틀렸습니다.");
        }
    }
}