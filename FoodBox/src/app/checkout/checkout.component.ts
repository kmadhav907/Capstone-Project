import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../admin/foods/foods';
import { HttpClientService } from '../service/http-client.service';
import { Order } from './order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  firstName: string;
  lastName: string;
  amountPayable: number = 0;
  email: string;
  address: string;
  cartItems: Array<Food>;
  constructor(
    private router: Router,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user == null) {
      this.router.navigate(['/login']);
    }
    let data = localStorage.getItem('cart');
    this.cartItems = JSON.parse(data);
    if (this.cartItems.length === 0) {
      this.router.navigate(['/']);
    } else {
      console.log(this.cartItems);
      this.cartItems.forEach((food: Food) => {
        this.amountPayable += Number(food.price);
      });
    }
  }
  sendOrder() {
    let order: Order = new Order();
    if (this.address && this.email && this.firstName && this.lastName) {
      order.address = this.address;
      order.email = this.email;
      order.name = this.firstName + ' ' + this.lastName;
      order.amountpayed = this.amountPayable;
      console.log(order);
      this.httpClientService
        .addOrders(order)
        .subscribe((response: any) => console.log('Order added Successfully'));
      localStorage.removeItem('cart');
      this.router.navigate(['/']);
    } else {
      alert('Fill all details');
    }
  }
}
