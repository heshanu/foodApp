import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MasterService } from '../../service/master.service';
import { MaterialModule } from '../../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CategoryComponent } from './category/category.component';
import { provideClientHydration } from '@angular/platform-browser';
import { NgZorroAntdModule } from '../../shared/nzmaterial/nZmaterial';
@NgModule({
  declarations: [
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    NgZorroAntdModule
  ],
  exports: [CategoryRoutingModule],
  providers: [
    provideClientHydration(),
    MasterService,

  ],
})
export class CategoryModule { }
