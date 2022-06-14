import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodsComponent } from './admin/foods/foods.component';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [
  { path: 'admin/users', component: UsersComponent },
  { path: 'admin/foods', component: FoodsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
