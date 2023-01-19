import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../modelos/producto';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  private URL_PRODUCTOS = 'https://dummyjson.com/auth/products?skip=0'
  private primerosProductos!: Productos;

  constructor(
    private http: HttpClient
  ) { }

  public listar(token: string){
    this.http.get(this.URL_PRODUCTOS).subscribe( parametros =>{
        this.primerosProductos = parametros as Productos;
        console.log(this.primerosProductos);
    })
  }

  public obtenerProductos(){
    return this.primerosProductos;
  }

}
