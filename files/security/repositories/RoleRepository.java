package com.example.prueba.security.repositories;

import com.example.prueba.security.entities.Role;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository  extends JpaRepository<Role, Long> {
}
