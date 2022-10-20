import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-table',
  templateUrl: './budget-table.page.html',
  styleUrls: ['./budget-table.page.scss'],
})
export class BudgetTablePage implements OnInit {

  budgetArray: any[] = [1, 2, 3]

  constructor() { }

  ngOnInit() {
  }

}
