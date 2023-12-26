import { Component } from '@angular/core';
import { MasterService } from '../../../service/master.service';
import { Food } from '../../../shared/interface/food';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers: [MasterService]
})
export class CategoryComponent {

  public foodCategoryList: Food[] = [];

  constructor(private master: MasterService) { 
    this.getAllFoodCategory();
  }

  public getAllFoodCategory() {
    this.foodCategoryList = this.master.foodList;
    console.log(this.foodCategoryList);
  }
}
