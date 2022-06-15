import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../admin/foods/foods';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: Array<Food>;
  totalSumToBePayed: number = 0;
  constructor(private router: Router) {}

  ngOnInit(): void {
    let data = localStorage.getItem('cart');
    if (data == null) {
      this.router.navigate(['/']);
    } else {
      this.cartItems = JSON.parse(data);
      this.cartItems.forEach((item: Food) => {
        this.totalSumToBePayed += Number(item.price);
      });
      console.log(this.cartItems);
      console.log(this.totalSumToBePayed);
    }
  }
  deleteItem(foodId) {
    console.log(foodId);
    const items = this.cartItems.filter((food: Food) => food.id !== foodId);
    localStorage.setItem('cart', JSON.stringify(items));
    this.cartItems = items;
    this.totalSumToBePayed = 0;
    this.cartItems.forEach((item: Food) => {
      this.totalSumToBePayed += Number(item.price);
    });
    if (items.length === 0) {
      this.router.navigate(['/']);
    }
  }
}
