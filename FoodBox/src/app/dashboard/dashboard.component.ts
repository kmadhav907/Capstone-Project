import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from '../admin/foods/foods';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  foods: Array<Food>;
  foodsRecieved: Array<Food>;
  cartFoods: any;
  constructor(
    private router: Router,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {
    this.httpClientService
      .getFoods()
      .subscribe((response) => this.handleSuccessfulResponse(response));
    let data = localStorage.getItem('cart');
    if (data !== null) {
      this.cartFoods = JSON.parse(data);
    } else {
      this.cartFoods = [];
    }
  }
  handleSuccessfulResponse(response) {
    this.foods = new Array<Food>();
    this.foodsRecieved = response;
    for (const food of this.foodsRecieved) {
      const foodwithRetrievedImageField = new Food();
      foodwithRetrievedImageField.id = food.id;
      foodwithRetrievedImageField.name = food.name;
      //populate retrieved image field so that food image can be displayed
      foodwithRetrievedImageField.retrievedImage =
        'data:image/jpeg;base64,' + food.picByte;
      foodwithRetrievedImageField.description = food.description;
      foodwithRetrievedImageField.price = food.price;
      foodwithRetrievedImageField.picByte = food.picByte;
      this.foods.push(foodwithRetrievedImageField);
    }
  }
  addToCart(foodId) {
    let food = this.foods.find((food) => {
      return food.id === +foodId;
    });
    let cartData = [];
    let data = localStorage.getItem('cart');
    if (data !== null) {
      cartData = JSON.parse(data);
    }
    cartData.push(food);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    food.isAdded = true;
  }

  updateCartData(cartData) {
    this.cartFoods = cartData;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  emptyCart() {
    this.cartFoods = [];
    localStorage.removeItem('cart');
  }
}
