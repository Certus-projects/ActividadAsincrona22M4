import { Component, Input, OnInit } from '@angular/core';
import { User,Userounde } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  // datos:User
  datos: User = {id:0,name:"",username:""}
  Crear(){
    console.log(this.datos)
    this.userService.postUser(this.datos).subscribe(
      (usuario:User) => console.log(usuario)
    )
  }
  onSubmit(){
    this.Crear()
  }
}
