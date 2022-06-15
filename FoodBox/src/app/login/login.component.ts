import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userName: string;
  password: string;
  constructor(
    private router: Router,
    private httpClientService: HttpClientService
  ) {}

  ngOnInit(): void {}
  signIn() {
    if (this.userName && this.password) {
      console.log(localStorage.getItem('user'));
      this.httpClientService
        .signIn(this.userName, this.password)
        .subscribe((response: any) => {
          if (response.response) {
            switch (response.response) {
              case 'success':
                alert('Login Successful');
                localStorage.setItem('user', JSON.stringify(response.user));
                console.log(response.user);
                this.router.navigate(['/']);
                break;
              case 'NoUserFound':
                alert('No Users found');
                break;
              case 'incorrectCredentials':
                alert('Incorrect Password');
                break;
              default:
                alert('Something went wrong');
            }
          }
        });
    }
  }
}
