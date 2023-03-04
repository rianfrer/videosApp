import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Deseja favoritar este filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  async apresentarToast() {
      const toast = await this.toastController.create({
        message: 'Filme adicionado aos favoritos!',
        duration: 2000,
        color: "success"
      });

    await toast.present();

  }
}

