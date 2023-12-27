import { Component, ViewChild } from '@angular/core';
import { Food } from '../../shared/interface/food';
import { RestarantItemsComponent } from '../restarant-items/restarant-items.component';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent {
  foodOrderList: Food[] = [];
  foodObject!: Food;
  constructor() { 
    this.foodObject = JSON.parse(localStorage.getItem('foodObject')!);
    this.foodOrderList.push(this.foodObject);
    console.log('this is foodObject',this.foodOrderList);
  }

}
