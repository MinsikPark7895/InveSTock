package com.user.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable()) // 개발용 API 통신을 위해 비활성화
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/", "/api/auth/**", "/login/**").permitAll() // 누구나 접근 가능
                .anyRequest().authenticated() // 나머지는 로그인해야 접근 가능
            )
            .oauth2Login(oauth2 -> oauth2
                // 구글 로그인 성공 시 리액트 메인 화면(5173)으로 돌려보냄
                .defaultSuccessUrl("http://localhost:5173", true)
            );
            
        return http.build();
    }
}
