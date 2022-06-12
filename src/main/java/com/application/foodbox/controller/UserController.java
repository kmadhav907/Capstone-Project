package com.application.foodbox.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.application.foodbox.model.User;
import com.application.foodbox.repository.UserRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "users")
public class UserController {
	
	@Autowired
	private UserRepository userRepository;
	
	@GetMapping("/get")
	
	public List<User> getUsers() {
		return userRepository.findAll();
	}
}
