import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertMessagesService } from 'src/app/core/services/alertMessages/alert-messages.service';

@Component({
  selector: 'app-create-budget',
  templateUrl: './create-budget.page.html',
  styleUrls: ['./create-budget.page.scss'],
})
export class CreateBudgetPage implements OnInit {

  formMaterial: FormGroup
  materialsArray: any[] = []
  subtotal: number = 0
  dateBudget: any

  constructor(
    private fb: FormBuilder,
    private messageService: AlertMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.formMaterial = this.fb.group({
      material: this.fb.control('', Validators.required),
      quantity: this.fb.control('', Validators.required),
      price: this.fb.control('', Validators.required)
    })
  }

  addMaterial() {
    this.messageService.showLoading('Agregando...').then((loading: HTMLIonLoadingElement) => {
      loading.present()

      let singleMaterial
      setTimeout(() => {
        singleMaterial = this.formMaterial.value
        this.materialsArray.push(singleMaterial)
        this.subtotal = this.calculateSubtotal( singleMaterial.price )
        this.formMaterial.reset()
        loading.dismiss()
      }, 1000);
    })
  }

  calculateSubtotal( price: number ) {
    let lastSubt = 0
    let subTotal = 0
    for( let i = 0; i < this.materialsArray.length; i++ ){
      subTotal = this.materialsArray[i].price + lastSubt
      lastSubt = subTotal
    }

    return subTotal
  }

  cancelBudget() {
    this.materialsArray = []
    this.router.navigateByUrl('/home')
  }

  getDate( event: any ) {
    console.log(event.target.value)
  }

}
