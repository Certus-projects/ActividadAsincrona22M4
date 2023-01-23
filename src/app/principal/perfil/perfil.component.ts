import { Component, OnInit } from '@angular/core';
import { Datosasd } from 'src/app/models/asincrona20';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  dato: string | null = '';
  userData: any;
  datos: Datosasd = { nombre: '', apellido: '', user: '' };
  nombre = '';
  apellido = '';
  user = '';
  constructor() {}

  ngOnInit(): void {
    this.dato = localStorage.getItem('datos');
    let data = localStorage.getItem('usuario');
    console.log(data);
    if (data) {
      this.userData = JSON.parse(data);
      console.log(this.userData);
    }
    if (typeof this.dato === 'string') {
      this.datos = JSON.parse(this.dato);
      this.nombre = this.datos.nombre;
      this.apellido = this.datos.apellido;
      this.user = this.datos.user;
    }
  }
}
