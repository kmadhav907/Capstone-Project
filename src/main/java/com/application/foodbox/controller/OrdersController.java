package com.application.foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.foodbox.model.Orders;
import com.application.foodbox.repository.OrdersRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "orders")
public class OrdersController {
	
	@Autowired
	OrdersRepository orderRepository;
	
	@PostMapping("/add")
	public void addOrder(@RequestBody Orders order) {
		System.out.println(order);
		orderRepository.save(order);
	}
	@GetMapping("/get")
	public List<Orders> getOrder() {
		System.out.println("Getting all orders");
		return orderRepository.findAll();
	}

}
