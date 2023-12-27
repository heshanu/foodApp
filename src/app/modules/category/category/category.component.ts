import { Component } from '@angular/core';
import { MasterService } from '../../../service/master.service';
import { Food } from '../../../shared/interface/food';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [MasterService]
})
export class CategoryComponent {

  public foodCategoryList: Food[] = [];

  constructor(private master: MasterService,private router:Router) { 
    this.getAllFoodCategory();
  }

  public getAllFoodCategory() {
    this.foodCategoryList = this.master.foodList;
    console.log(this.foodCategoryList);
  }

  public onSelect(food: string) {
    this.router.navigate(['/restaurant-items', food]); 
  }
}
