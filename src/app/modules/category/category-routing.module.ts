import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  {path:"",component:CategoryComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
