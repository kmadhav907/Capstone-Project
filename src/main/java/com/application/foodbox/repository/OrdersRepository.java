package com.application.foodbox.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.application.foodbox.model.Orders;

public interface OrdersRepository extends JpaRepository<Orders, Long>{

}
