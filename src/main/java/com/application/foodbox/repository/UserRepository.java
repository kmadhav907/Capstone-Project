package com.application.foodbox.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.application.foodbox.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
