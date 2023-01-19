import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Producto, Productos } from '../modelos/producto';
import { ListarService } from './listar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage {

  private token: string = '';
  public productos!: Productos;

  constructor(
    private listar: ListarService,
    private login: LoginService
  ) { }

  ionViewWillEnter(){
    this.token = this.login.obtenerToken();
    this.listar.listar(this.token);
  }

  ionViewDidEnter(){
    this.productos = this.listar.obtenerProductos();
  }


}
