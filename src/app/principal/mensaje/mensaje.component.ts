import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CandesactivateGuard } from 'src/app/candesactivate.guard';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

  mensaje = ""
  enviado = false
  
  EnviarMensaje(){
    alert("mensaje"+this.mensaje)
    this.enviado=true
  }
  salirDeRuta():Observable<boolean> | boolean{
    if(!this.mensaje || this.enviado){
      return true
    }
    const confirmar = confirm("deseas abandonar el formulario")
    console.log(confirmar)
    return confirmar
  }

}
