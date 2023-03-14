import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { map, catchError } from 'rxjs';
import { Observable } from 'rxjs';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root',
})
export class GeneroService {

  lingua = 'pt-BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=abb1767b54bd6d507fba979954ea4628';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  buscarGeneros(): Observable<IListaGenero | any> {
    const url = `${this.apiURL}genre/movie/list${this.key}&language=${this.lingua}`;

    return this.http.get<IListaGenero>(url).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  async exibirErro(erro: any) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API!',
      duration: 2000,
      color: 'danger',
      position: 'middle',
    });
    toast.present();
    return null;
  }
}
