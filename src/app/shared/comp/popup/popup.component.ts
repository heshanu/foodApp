import { Component } from '@angular/core';
import { Food } from '../../interface/food';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  foodObj!: Food;
  constructor() {
    this.foodObj = JSON.parse(localStorage.getItem('foodObject')!);
    console.log('this is foodObject',this.foodObj);
  }
  
  public back() {
    window.history.back();
  }
}
