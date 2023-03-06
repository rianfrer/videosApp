import { DadosService } from './../services/dados.service';
import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = "Videos App";

  listaVideos: IFilme[] = [
    {
      nome: "Avatar: O Caminho da Água (2022)",
      lancamento: "15/12/2022",
      duracao: "3h 12m",
      classificacao: 76,
      cartaz: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mbYQLLluS651W89jO7MOZcLSCUw.jpg",
      generos: ["Ficção científica", "Aventura", "Ação"],
      pagina: "/avatar"
    },
    {
      nome: "Creed III (2023)",
      lancamento: "02/03/2023",
      duracao: "1h 56m",
      classificacao: 73,
      cartaz: "https://www.themoviedb.org/t/p/w440_and_h660_face/7YN6LU2sGJepnZKOa2NW2YVjq1S.jpg",
      generos: ["Drama", "Ação"],
      pagina: "/creed"
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) {}

    exibirFilme(filme: IFilme){
      this.dadosService.guardarDados("filme", filme);
      this.route.navigateByUrl("/dados-filme");
    }

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

