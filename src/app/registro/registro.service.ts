import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Registro, RegistroResponse } from '../modelos/usuario';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private URL_REGISTRO: string = 'https://dummyjson.com/users/add'
  private datosRegistro!: RegistroResponse | null;

  constructor(
    private http: HttpClient,
    private alert: AlertController
  ) { }

  public registro({ firstName,lastName,age,username,password,birthDate,gender }: Registro){
    this.http.post(this.URL_REGISTRO, {
      firstName,
      lastName,
      age,
      username,
      password,
      birthDate,
      gender
    },{headers: {'Content-Type': 'application/json'}
  }).pipe(
    catchError(async (error:HttpErrorResponse) => {
      if (error.status === 400) {
        const alerta = await this.alert.create({
          header: 'Error al registrarse',
          buttons: [{
            role: 'confirm',
            text: 'OK',
          }]
        });
        await alerta.present();
      }
    })).subscribe( parametros => {
      if (parametros) {
      this.datosRegistro = parametros as RegistroResponse;
      console.log(this.datosRegistro);
      }
    })
  }



  public obtenerDatosRegistro(){
    return this.datosRegistro;
  }
}
