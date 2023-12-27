import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  currentRate!: number;

  orderObj:any={
    'orderId': "",
    'userId': "",
    'orderDate': new Date(),
    'totalAmount': 0,
    'restaurantId': 0,
    'orderNo': "string",
    'zomatoOrderId': [{
      'orderItemId': 0,
      'orderId': 0,
      'itemId': 0,
      'quantity': 0,
    }]
  }

  constructor(private activate: ActivatedRoute,private master:MasterService,private router:Router) {
    this.activate.params.subscribe((data) => {
      console.log(data);
      this.foodName = data["categoryName"];
    });
    this.getAllFoodItems();
   // this.increaseIncrease(this.foodObject.rating);
  }
  
  public getAllFoodItems():void {
    this.foodList = this.master.foodList;
    const selectedFood = this.foodList.filter((food) =>
      food.strCategory == this.activate.snapshot.params["categoryName"]);
    this.foodObject = selectedFood[0];
    console.log('this is selectedFood',selectedFood);
  }

 

  public backToHome():void{
    window.history.back();
  }

  public increaseIncrease(val:number): void{
    this.currentRate = val;
    this.currentRate++;
  }
  
  public order() {
    console.log(`Order food`, this.foodObject);
    //store food object in local storage
    localStorage.setItem('foodObject', JSON.stringify(this.foodObject));
    //navigate to order component
    this.router.navigate(['/orders']);
    
  }

  public placeOrder(): void {
    
   // this.orderObj.userId = this.foodObject.strCategory;
      
  }
}
