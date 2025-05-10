package com.example.prueba.security.services;


import com.example.prueba.security.entities.User;
import com.example.prueba.security.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class UserServices  {
    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void save(User user) {
        userRepository.save(user);
    }

    public Integer insertUserRol(Long user_id, Long rol_id) {
        Integer result = 0;
        userRepository.insertUserRol(user_id, rol_id);
        return 1;
    }
}
