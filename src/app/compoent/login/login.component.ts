import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb: FormBuilder,private router:Router) {}
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
        alert("Login Success");
        this.router.navigate(['/dashboard']);
      }
      else {
        alert("Login Failed");
        this.router.navigate(['/login']);
      }
    }
    this.addressForm.reset();
  }

  public storeCredientials(): boolean {
    console.log(`type`,typeof(localStorage.getItem('email')));
    if (localStorage.getItem('email') == "h@gmail.com" && localStorage.getItem('username') == "heshan") {
      return true;
    } else { 
      return false;
    }
    
  }
}
