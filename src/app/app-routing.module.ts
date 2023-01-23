import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Asincrona20Component } from './principal/asincrona20/asincrona20.component';
import { AsincronaComponent } from './principal/asincrona/asincrona.component';
import { BusquedaComponent } from './principal/busqueda/busqueda.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { Reto19Component } from './principal/reto19/reto19.component';
import { Reto20Component } from './principal/reto20/reto20.component';
import { RetoComponent } from './principal/reto/reto.component';
import { VistaComponent } from './principal/vista/vista.component';
import { CanactivateGuard } from './canactivate.guard';
import { LoginComponent } from './principal/login/login.component';
import { MensajeComponent } from './principal/mensaje/mensaje.component';
import { CandesactivateGuard } from './candesactivate.guard';
import { RetoformregistroComponent } from './principal/retoformregistro/retoformregistro.component';
import { PerfilComponent } from './principal/perfil/perfil.component';

const routes: Routes = [
  {path:"vista",component:VistaComponent,canActivate: [CanactivateGuard]},
  {path:"busqueda",component:BusquedaComponent,canActivate: [CanactivateGuard]},
  {path:"form",component:FormularioComponent,canActivate: [CanactivateGuard]},
  {path:"reto19",component:Reto19Component,canActivate: [CanactivateGuard]},
  {path:"reto20",component:Reto20Component,canActivate: [CanactivateGuard]},
  {path:"reto",component:RetoComponent,canActivate: [CanactivateGuard]},
  {path:"asin20",component:Asincrona20Component,canActivate: [CanactivateGuard]},
  {path:"asincrona19",component:AsincronaComponent,canActivate: [CanactivateGuard]},
  {path:"mensaje",component:MensajeComponent,canDeactivate: [CandesactivateGuard],canActivate: [CanactivateGuard]},
  {path:"registro",component:RetoformregistroComponent,canDeactivate: [CandesactivateGuard],canActivate: [CanactivateGuard]},
  {path:"perfil",component:PerfilComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:VistaComponent,canActivate: [CanactivateGuard]},
  {path:"**",component:VistaComponent,canActivate: [CanactivateGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
