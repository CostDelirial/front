import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateBudgetPageRoutingModule } from './create-budget-routing.module';

import { CreateBudgetPage } from './create-budget.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateBudgetPageRoutingModule,
    ReactiveFormsModule,
    CoreModule
  ],
  declarations: [CreateBudgetPage]
})
export class CreateBudgetPageModule {}
