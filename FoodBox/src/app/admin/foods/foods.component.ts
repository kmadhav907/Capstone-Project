import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Food } from './foods';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css'],
})
export class FoodsComponent implements OnInit {
  foods: Array<Food>;
  selectedFood: Food;
  action: string;
  constructor(
    private httpClientService: HttpClientService,
    private acitvatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.httpClientService
      .getFoods()
      .subscribe((response) => this.handleSuccessfulResponse(response));
    this.acitvatedRoute.queryParams.subscribe((params) => {
      this.action = params['action'];
    });
  }
  handleSuccessfulResponse(response) {
    this.foods = response;
  }
  addFood() {
    this.selectedFood = new Food();
    this.router.navigate(['admin', 'foods'], {
      queryParams: { action: 'add' },
    });
  }
  setFood(id) {}
}
