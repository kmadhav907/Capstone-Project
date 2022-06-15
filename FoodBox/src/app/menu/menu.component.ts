import { Component, OnInit } from '@angular/core';
import { User } from '../admin/users/users';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  showAdminDropDown: boolean;
  constructor() {}

  ngOnInit(): void {
    const user: User | null = JSON.parse(localStorage.getItem('user'));
    if (user && user.type === 'admin') {
      this.showAdminDropDown = true;
    } else {
      this.showAdminDropDown = false;
    }
  }
}
