import { Injectable } from '@angular/core';
import { User } from '../admin/users/users';
import { HttpClient } from '@angular/common/http';
import { Food } from '../admin/foods/foods';
import { Order } from '../checkout/order';

@Injectable({
  providedIn: 'root',
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get<User[]>('http://localhost:8082/users/get');
  }
  addUser(newUser: User) {
    console.log(newUser);
    return this.httpClient.post<User>(
      'http://localhost:8082/users/add',
      newUser
    );
  }
  deleteUser(id) {
    return this.httpClient.delete<User>('http://localhost:8082/users/' + id);
  }
  getFoods() {
    return this.httpClient.get<Food[]>('http://localhost:8082/foods/get');
  }
  addFood(newFood: Food) {
    return this.httpClient.post<Food>(
      'http://localhost:8082/foods/add',
      newFood
    );
  }
  deleteFood(id) {
    return this.httpClient.delete<Food>('http://localhost:8082/foods/' + id);
  }
  updateFood(updatedFood: Food) {
    return this.httpClient.put<Food>(
      'http://localhost:8082/foods/update',
      updatedFood
    );
  }
  addOrders(order: Order) {
    return this.httpClient.post<Order>(
      'http://localhost:8082/orders/add',
      order
    );
  }
}
