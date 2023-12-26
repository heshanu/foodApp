import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './compoent/notfound/notfound.component';
import { LoginComponent } from './compoent/login/login.component';

const routes: Routes = [
   {
    path:'login',component:LoginComponent
  },
  {
    path: 'category',
    loadChildren: () => import('./modules/category/category.module')
      .then(m => m.CategoryModule)
  },
  {
    path:'**',component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
