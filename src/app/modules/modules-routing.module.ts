import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './categorymodule/category/category.component';
import { LoginComponent } from './loginmodule/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path:'category',component:CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
