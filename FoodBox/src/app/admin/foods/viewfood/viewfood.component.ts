import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from 'src/app/service/http-client.service';
import { Food } from '../foods';

@Component({
  selector: 'app-viewfood',
  templateUrl: './viewfood.component.html',
  styleUrls: ['./viewfood.component.css'],
})
export class ViewfoodComponent implements OnInit {
  @Input()
  food: Food;

  @Output()
  foodDeletedEvent = new EventEmitter();
  constructor(
    private httpClientService: HttpClientService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  deleteFood() {
    this.httpClientService.deleteFood(this.food.id).subscribe((food) => {
      this.foodDeletedEvent.emit();
      this.router.navigate(['admin', 'foods']);
    });
  }
  editFood() {
    this.router.navigate(['admin', 'foods'], {
      queryParams: { action: 'edit', id: this.food.id },
    });
  }
}
