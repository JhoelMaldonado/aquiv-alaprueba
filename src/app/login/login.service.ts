import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login, LoginResponse } from '../modelos/login';
import { AlertController } from '@ionic/angular';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private URL_LOGIN = 'https://dummyjson.com/auth/login';
  private datosUsuario!: LoginResponse | null;
  private token!: string;

  constructor(
    private http: HttpClient,
    private alert: AlertController
  ) { }

  public autenticar({username, password}: Login) {
    this.http.post(this.URL_LOGIN, {
      username,
      password
    },{headers:
      {
        'Content-Type': 'application/json'
      }}).pipe(
        catchError( async (error: HttpErrorResponse) => {
          if (error.status === 400) {
            const alerta = await this.alert.create({
              header: 'Error al autenticar',
              buttons:[{
                text: 'OK',
                role: 'confirm'
              }]
            });
            await alerta.present();
          };
        })
      ).subscribe( parametros => {
        if (parametros) {
        this.datosUsuario = parametros as LoginResponse;
        this.token = this.datosUsuario.token;
        console.log(this.datosUsuario)
      }})

  }



  public obtenerDatosUsuario() {
    return this.datosUsuario;
  }

  public obtenerToken() {
    return this.token;
  }

}
