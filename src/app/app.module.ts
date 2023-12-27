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
import { RestarantItemsComponent } from './compoent/restarant-items/restarant-items.component';
import { CreateOrderComponent } from './compoent/create-order/create-order.component'; 
import { HttpClientModule } from '@angular/common/http';
import { MasterService } from './service/master.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotfoundComponent,
    LoginComponent,
    RestarantItemsComponent,
    CreateOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryModule,
    MatSidenavModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    MasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
