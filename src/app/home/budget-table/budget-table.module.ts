import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BudgetTablePageRoutingModule } from './budget-table-routing.module';

import { BudgetTablePage } from './budget-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BudgetTablePageRoutingModule
  ],
  declarations: [BudgetTablePage]
})
export class BudgetTablePageModule {}
