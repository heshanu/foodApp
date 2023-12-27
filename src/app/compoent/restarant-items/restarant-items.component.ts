import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MasterService } from '../../service/master.service';
import { Food } from '../../shared/interface/food';

@Component({
  selector: 'app-restarant-items',
  templateUrl: './restarant-items.component.html',
  styleUrl: './restarant-items.component.css'
})
export class RestarantItemsComponent {
  foodList: Food[] = []; 
  foodObject!: Food;
  foodName!: string;
  currentRate: number = 0;

  constructor(private activate: ActivatedRoute,private master:MasterService) {
    this.activate.params.subscribe((data) => {
      console.log(data);
      this.foodName = data["categoryName"];
    });
    this.getAllFoodItems();
  }
  
  public getAllFoodItems():void {
    this.foodList = this.master.foodList;
    const selectedFood = this.foodList.filter((food) =>
      food.strCategory == this.activate.snapshot.params["categoryName"]);
    this.foodObject = selectedFood[0];
    console.log('this is selectedFood',selectedFood);
  }

  public loadFoodItemByCategory():void{ 

  }

  public backToHome():void{
    window.history.back();
  }
  
}
