import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private autentificacion: AutenticacionService,
    private router: Router,
    private formbuilder: FormBuilder
  ) {}
  registroform = this.formbuilder.group({
    usuario: [
      '',
      {
        validators: [Validators.required],
      },
    ],
    password: [
      '',
      {
        validators: [Validators.required],
      },
    ],
  });
  get usuario() {
    return this.registroform.get('usuario');
  }
  get password() {
    return this.registroform.get('password');
  }
  urlRedireccion = '';
  ngOnInit(): void {}
  Usuario_ = 'asd';
  Password_ = '123456';
  contrasenaincorrecta = false;
  login() {
    let usuarioeninput = this.registroform.value.usuario;
    let passwordEnInput = this.registroform.value.password;
    console.log(usuarioeninput);
    console.log(passwordEnInput);
    if (usuarioeninput == this.Usuario_ && passwordEnInput == this.Password_) {
      this.autentificacion.login();
      this.urlRedireccion = this.autentificacion.urlUsuarioIntentaAcceder;
      this.autentificacion.urlUsuarioIntentaAcceder = '';
      this.router.navigate([this.urlRedireccion]);
      console.log(typeof this.urlRedireccion);
    } else {
      this.contrasenaincorrecta = true;
    }
  }
}
