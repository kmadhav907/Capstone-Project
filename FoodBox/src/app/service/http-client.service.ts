import { Injectable } from '@angular/core';
import { User } from '../admin/users/users';
import { HttpClient } from '@angular/common/http';

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
}
