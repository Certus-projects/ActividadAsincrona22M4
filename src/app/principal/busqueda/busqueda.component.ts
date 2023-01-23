import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  resultado = false
  user!:User ;
  getUserId(valor:string){
    this.userService.getUserId(valor).subscribe({
      next:(usuario:User)=> {
        this.resultado = true
        this.user = usuario
      },
      error:(e)=> {console.error(e);this.resultado = false},
      complete:()=>console.log("completado")
    })
  }
}
