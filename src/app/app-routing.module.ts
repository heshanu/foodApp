import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './compoent/notfound/notfound.component';
import { LoginComponent } from './compoent/login/login.component';
import { RestarantItemsComponent } from './compoent/restarant-items/restarant-items.component';
import { CreateOrderComponent } from './compoent/create-order/create-order.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
   {
    path:'login',component:LoginComponent
  },
  {
    path: 'restaurant-items/:categoryName',component:RestarantItemsComponent
  },
  {
    path:'orders',component:CreateOrderComponent
  },
  {
    path: 'foodcategory',
    loadChildren: () => import('./modules/category/category.module')
      .then(m => m.CategoryModule)
  },
  {
    path:'**',component:NotfoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
