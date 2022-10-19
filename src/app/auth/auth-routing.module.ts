import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: 'login',
      loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule )
    },
    {
      path: 'register',
      loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule )
    },
    {
      path: 'welcome',
      loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
    },
    {
      path: 'logout',
      loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }
  ]
}]  
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
