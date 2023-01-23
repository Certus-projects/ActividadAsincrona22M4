import { Component, OnInit } from '@angular/core';
import { Reto20 } from 'src/app/models/reto20';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-reto20',
  templateUrl: './reto20.component.html',
  styleUrls: ['./reto20.component.css']
})
export class Reto20Component implements OnInit {

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
  }
  resultado = false
  listado:Reto20 = new Array()
  mostrarusuarios(){
    this.ejecutarmetodo()
  }
  ejecutarmetodo(){
    this.userService.getre20mostrar().subscribe({
      next: (response: any) => {
        this.resultado = true
        this.listado = response.body;console.log(response)
      },
      error: (e)=> {
        this.resultado = false
        console.error(e)
      },
      complete: () => console.log("la api te dio todo lo qeu tenia")
    })
  }
}
