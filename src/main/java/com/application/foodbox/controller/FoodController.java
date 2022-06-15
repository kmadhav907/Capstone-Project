package com.application.foodbox.controller;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.application.foodbox.model.Food;
import com.application.foodbox.repository.FoodRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(path = "foods")
public class FoodController {
	@Autowired
	private FoodRepository foodRepository;
	
	private byte[] bytes;
	
	@GetMapping("/get")
	public List<Food> getFoods() {
		System.out.println("Getting all Foods");
		return foodRepository.findAll();
	}
	@PostMapping("/upload")
	public void uploadImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		this.bytes = file.getBytes();
		System.out.println("File has been dispatched");
	}

	@PostMapping("/add")
	public void createBook(@RequestBody Food food) throws IOException {
		food.setPicByte(this.bytes);
		System.out.println(food);
		System.out.println("Saved successfully");
		foodRepository.save(food);
		this.bytes = null;
	}
	@DeleteMapping(path = { "/{id}" })
	public Food deleteBook(@PathVariable("id") long id) {
		Optional<Food> food = foodRepository.findById(id);
		if(food.isPresent()) {
			foodRepository.deleteById(id);
			System.out.println("Deleted Successfully");
			return food.get();
		}
		else {
			return null;
		}	
	}
	@PutMapping("/update")
	public void updateBook(@RequestBody Food food) {
				foodRepository.save(food);
				System.out.println("Updated Successfully");

	}

}
