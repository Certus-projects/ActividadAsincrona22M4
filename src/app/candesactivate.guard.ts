import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MensajeComponent } from './principal/mensaje/mensaje.component';

interface Desactivar{
  salirDeRuta :() => Observable<boolean> | boolean
}

@Injectable({
  providedIn: 'root'
})
export class CandesactivateGuard implements CanDeactivate<Desactivar> {
  canDeactivate(component: Desactivar,){
    return component.salirDeRuta ? component.salirDeRuta():true;
  }
  
}
