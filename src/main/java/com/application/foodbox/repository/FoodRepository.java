package com.application.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.foodbox.model.Food;

public interface FoodRepository extends JpaRepository<Food, Long> {
	
}
