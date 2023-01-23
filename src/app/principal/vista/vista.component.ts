import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.ejecutarelmetodo()
    // this.obtenerusuarios()
  }
  listado:Users = new Array()
  obtenerusuarios(){
    this.userService.getUsersAll().subscribe({
      next: (UserAll: Users) => this.listado = UserAll,
      error: (e)=> console.error(e),
      complete: () => console.log("la api te dio todo lo qeu tenia")
    })
  }
  ejecutarelmetodo(){
    this.userService.getUserAllInterceptor().subscribe({
      next: (response: any) => {this.listado = response.body;console.log(response)},
      error: (e)=> console.error(e),
      complete: () => console.log("la api te dio todo lo qeu tenia")
    })
  }

}
