import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder,
    private router: Router, private notifierService: NotifierService) {
    this.notifier = notifierService;
  }
  private readonly notifier!: NotifierService;
  addressForm = this.fb.group({
    username: [null, Validators.required],
    email: [null, Validators.required],
    // address: [null, Validators.required],
    // address2: null,
    // city: [null, Validators.required],
    // state: [null, Validators.required],
    // postalCode: [null, Validators.compose([
    //   Validators.required, Validators.minLength(5), Validators.maxLength(5)])
    // ],
    // shipping: ['free', Validators.required]
  });

  onSubmit(): void {
    if (this.addressForm.valid) {
      localStorage.setItem('email', JSON.stringify(this.addressForm.value.email));
      localStorage.setItem('username', JSON.stringify(this.addressForm.value.username));
      if (this.storeCredientials()) {
        this.notifierService.notify("success", "Successfully Logged In");
        this.router.navigate(['/foodcategory']);
      }
      else {
        this.notifierService.notify("error", "Invalid Credentials");
        this.router.navigate(['/login']);

      }
    }
    this.addressForm.reset();
  }

  public storeCredientials(): boolean {
    console.log(`type`,typeof(localStorage.getItem('email')));
    if (this.addressForm.value.username !== null && this.addressForm.value.email !== null
    ) { 
      if (this.addressForm.value.username === 'heshan' && this.addressForm.value.email =='h@gmail.com'){
        return true;
      }
      return false;
    }
    return false;
  }
}
