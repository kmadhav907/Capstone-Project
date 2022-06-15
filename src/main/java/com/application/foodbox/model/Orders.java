package com.application.foodbox.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="name")
	private String name;
	
	@Column(name="address")
	private String address;
	
	@Override
	public String toString() {
		return "Orders [id=" + id + ", name=" + name + ", address=" + address + ", email=" + email + ", amountpayed="
				+ amountpayed + "]";
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAmountpayed() {
		return amountpayed;
	}

	public void setAmountpayed(String amountpayed) {
		this.amountpayed = amountpayed;
	}

	@Column(name="email")
	private String email;
	
	@Column(name="amountpayed")
	private String amountpayed;
	
}
