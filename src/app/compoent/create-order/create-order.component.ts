import { Component, ViewChild } from '@angular/core';
import { Food } from '../../shared/interface/food';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../../shared/comp/popup/popup.component';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrl: './create-order.component.css'
})
export class CreateOrderComponent {
  foodOrderList: Food[] = [];
  foodObject!: Food;
  confirmModal?: NzModalRef; // For testing by now

  constructor(private modal: NzModalService,private dialogRef:MatDialog) { 
    this.foodObject = JSON.parse(localStorage.getItem('foodObject')!);
    this.foodOrderList.push(this.foodObject);
    console.log('this is foodObject',this.foodOrderList);
  }

  public back() { 
    //this.router.navigate(['/foodcategory']);
    window.history.back();
  }

  public payHere() {}

  isVisible = false;
  
  public showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent: 'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'))
    });
   }
  
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  public openDialog() { 
    this.dialogRef.open(PopupComponent);
    
  }


  
}
