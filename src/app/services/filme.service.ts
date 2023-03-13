import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IListaFilmes } from '../models/IFilmeAPI.model';
import { ToastController } from '@ionic/angular';
import { map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=abb1767b54bd6d507fba979954ea4628';

  constructor(
    private http: HttpClient,
    public toastController: ToastController
  ) {}

  buscarFilmes(busca: string): Observable<IListaFilmes | null> {
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListaFilmes>(url).pipe(
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
