import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './admin/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { AdduserComponent } from './admin/users/adduser/adduser.component';
import { FormsModule } from '@angular/forms';
import { ViewuserComponent } from './admin/users/viewuser/viewuser.component';
import { FoodsComponent } from './admin/foods/foods.component';
import { AddfoodComponent } from './admin/foods/addfood/addfood.component';
import { ViewfoodComponent } from './admin/foods/viewfood/viewfood.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, UsersComponent, AdduserComponent, ViewuserComponent, FoodsComponent, AddfoodComponent, ViewfoodComponent, DashboardComponent, CartComponent, CheckoutComponent, OrdersComponent, LoginComponent, RegisterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
