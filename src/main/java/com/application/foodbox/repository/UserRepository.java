package com.application.foodbox.repository;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.foodbox.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findUserById(long id);
}
