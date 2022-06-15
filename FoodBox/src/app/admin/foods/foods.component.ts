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
  foodsRecived: Array<Food>;
  selectedFood: Food;
  action: string;
  constructor(
    private httpClientService: HttpClientService,
    private acitvatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refreshData();
  }
  refreshData() {
    this.httpClientService
      .getFoods()
      .subscribe((response) => this.handleSuccessfulResponse(response));
    this.acitvatedRoute.queryParams.subscribe((params) => {
      this.action = params['action'];
      const id = params['id'];
      if (id) {
        this.selectedFood = this.foods.find((food) => {
          return food.id === +id;
        });
      }
    });
  }
  handleSuccessfulResponse(response) {
    this.foods = new Array<Food>();
    this.foodsRecived = response;
    for (const food of this.foodsRecived) {
      const foodWithImageField = new Food();
      foodWithImageField.id = food.id;
      foodWithImageField.name = food.name;
      foodWithImageField.retrievedImage =
        'data:image/jpeg;base64,' + food.picByte;
      foodWithImageField.description = food.description;
      foodWithImageField.price = food.price;
      foodWithImageField.picByte = food.picByte;
      this.foods.push(foodWithImageField);
    }
  }
  addFood() {
    this.selectedFood = new Food();
    this.router.navigate(['admin', 'foods'], {
      queryParams: { action: 'add' },
    });
  }
  viewFood(id: number) {
    this.router.navigate(['admin', 'foods'], {
      queryParams: { id, action: 'view' },
    });
  }
  setFood(id) {}
}
