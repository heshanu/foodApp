import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './compoent/notfound/notfound.component';

const routes: Routes = [
   {
    path: '',
    loadChildren: () => import('./modules/loginmodule/loginmodule.module').then(m => m.LoginmoduleModule)
  },
  {
    path: 'category', 
    loadChildren: () => import('./modules/categorymodule/categorymodule.module').then(m => m.CategorymoduleModule) 
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
