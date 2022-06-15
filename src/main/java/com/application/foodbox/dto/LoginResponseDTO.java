package com.application.foodbox.dto;

import com.application.foodbox.model.User;

public class LoginResponseDTO {
	private User user;
	private String response;
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public String getResponse() {
		return response;
	}
	public void setResponse(String response) {
		this.response = response;
	}
}
