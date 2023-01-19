import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  public formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private registro: RegistroService,
  ) {
    this.formulario = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      age: ['',Validators.required],
      username: ['',Validators.required],
      password: ['',Validators.required],
      birthDate: ['',Validators.required],
      gender: ['',Validators.required]
    })
  }

  public submit(){
    this.registro.registro({
      firstName: this.formulario.value['firstName'],
      lastName: this.formulario.value['lastName'],
      age: this.formulario.value['age'],
      username: this.formulario.value['username'],
      password: this.formulario.value['password'],
      birthDate: this.formulario.value['birthDate'],
      gender: this.formulario.value['gender']
    })


  }
}
