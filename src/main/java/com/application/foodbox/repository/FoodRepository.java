package com.application.foodbox.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.foodbox.model.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {
	Optional<Food> findById(long id);
}
