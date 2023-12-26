import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoryRoutingModule
  ],
  exports: [
    CategoryRoutingModule
  ]
})
export class CategoryModule { }
