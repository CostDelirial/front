import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateBudgetPage } from './create-budget.page';

const routes: Routes = [
  {
    path: '',
    component: CreateBudgetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateBudgetPageRoutingModule {}
