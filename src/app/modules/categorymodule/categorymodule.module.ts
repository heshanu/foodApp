import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorymoduleRoutingModule } from './categorymodule-routing.module';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategorymoduleRoutingModule
  ]
})
export class CategorymoduleModule { }
