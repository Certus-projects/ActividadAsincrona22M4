import { Component, OnInit } from '@angular/core';
import { Asincrona20 } from 'src/app/models/asincrona20';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css']
})
export class AsincronaComponent implements OnInit {

  constructor(private userService:UserserviceService) { }
  listado:Asincrona20 = new Array()
  ngOnInit(): void {
    this.ejecutarmetodo()
  }
  ejecutarmetodo(){
    this.userService.getasincrona20().subscribe({
      next: (response: any) => {this.listado = response.body;console.log(response)}
    })
  }
}
