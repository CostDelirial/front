import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBudgetPageRoutingModule } from './create-budget-routing.module';

import { CreateBudgetPage } from './create-budget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBudgetPageRoutingModule
  ],
  declarations: [CreateBudgetPage]
})
export class CreateBudgetPageModule {}
