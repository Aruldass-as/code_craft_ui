import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './features/components/signup/signup.component';
import { LoginComponent } from './features/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> import('./features/components/home/home.module').then(m=>m.HomeModule),
    // canActivate: [AuthgurdGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
   {
    path: '**', // any router not matched it will navigate
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
