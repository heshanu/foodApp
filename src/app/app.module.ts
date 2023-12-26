import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { NavbarComponent } from './compoent/navbar/navbar.component';
import { NotfoundComponent } from './compoent/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryModule } from './modules/category/category.module';
import { LoginComponent } from './compoent/login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryModule,MatSidenavModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
