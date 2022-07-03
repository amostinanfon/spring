package com.spring.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.backend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
