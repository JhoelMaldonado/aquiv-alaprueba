import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  public formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private login: LoginService,
  ) {
    this.formulario = this.formBuilder.group({
      username: ['atuny0', [Validators.required]],
      password: ['9uQFF1Lh', [Validators.required]],
    })
   }


  public submit(){
    if(this.formulario.valid){
      this.login.autenticar({
        username: this.formulario.value['username'],
        password: this.formulario.value['password'],
      })
    }
  }


}
