import { Component, OnInit } from '@angular/core';
import { Root } from 'src/app/models/reto19';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-reto19',
  templateUrl: './reto19.component.html',
  styleUrls: ['./reto19.component.css']
})
export class Reto19Component implements OnInit {

  constructor(private userService:UserserviceService) { }
  listado:Root = new Array()
  ngOnInit(): void {
    this.obtenerusuarios()
  }
  obtenerusuarios(){
    this.userService.getreto19().subscribe({
      next:(reto19:Root)=>{this.listado = reto19},
      error:(e)=>{console.error(e)},
      complete:()=> console.log
    });
  }
}
