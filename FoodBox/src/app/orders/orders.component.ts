import { Component, OnInit } from '@angular/core';
import { Order } from '../checkout/order';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  orders: Array<Order>;
  constructor(private httpClientService: HttpClientService) {}

  ngOnInit(): void {
    this.httpClientService.getOrders().subscribe((response) => {
      this.orders = response;
      console.log(this.orders);
    });
  }
}
