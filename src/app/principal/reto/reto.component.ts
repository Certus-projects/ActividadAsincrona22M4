import { Component, OnInit } from '@angular/core';
import { DatosAsincrona18 ,Daum} from 'src/app/models/asincronareto18';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-reto',
  templateUrl: './reto.component.html',
  styleUrls: ['./reto.component.css']
})
export class RetoComponent implements OnInit {

  constructor(private userService:UserserviceService) { }
  datos:Daum = { id:0,name:"",year:0 }
  ngOnInit(): void {
  }
  onSubmit(){
    this.Crear()
  }
  Crear(){
    this.userService.postAsincrona(this.datos).subscribe(
      (asincrona:Daum) => console.log(asincrona)
    )
  }
}
