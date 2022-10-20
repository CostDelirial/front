import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'create-budget',
    loadChildren: () => import('./create-budget/create-budget.module').then( m => m.CreateBudgetPageModule)
  },
  {
    path: 'budget-table',
    loadChildren: () => import('./budget-table/budget-table.module').then( m => m.BudgetTablePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
