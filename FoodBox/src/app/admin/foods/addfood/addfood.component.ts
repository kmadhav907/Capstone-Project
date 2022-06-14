import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../../../service/http-client.service';
import { Food } from '../foods';

@Component({
  selector: 'app-addfood',
  templateUrl: './addfood.component.html',
  styleUrls: ['./addfood.component.css'],
})
export class AddfoodComponent implements OnInit {
  @Input()
  food: Food;
  private selectedFile;
  imgURL: any;
  constructor(
    private httpClient: HttpClient,
    private httpClientService: HttpClientService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  public onFileChanged(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (event2) => {
      this.imgURL = reader.result;
    };
  }

  saveFood() {
    const uploadData = new FormData();
    uploadData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.selectedFile.imageName = this.selectedFile.name;

    this.httpClient
      .post('http://localhost:8082/foods/upload', uploadData, {
        observe: 'response',
      })
      .subscribe((response) => {
        if (response.status === 200) {
          console.log('Food value:' + this.food);
          this.httpClientService.addFood(this.food).subscribe((food) => {
            this.router.navigate(['admin', 'foods']);
          });
          console.log('Image uploaded successfully');
        } else {
          console.log('Image not uploaded successfully');
        }
      });
  }
}
