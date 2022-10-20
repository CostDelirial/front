import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertMessagesService {

  constructor(
    private alert: AlertController,
    private loading: LoadingController
  ) { }

  async alertMessages( title: string, message: string ){
    const alert = await this.alert.create({
      header: title,
      message: message,
      buttons: ['OK']
    })

    alert.present()
  }

  async showLoading( message: string ){
    const loading = await this.loading.create({
      message: message
    })

    return loading
  }

}
