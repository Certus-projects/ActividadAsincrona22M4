import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UserintersectorService } from '../services/userintersector.service';
import { Reto19Component } from './reto19/reto19.component';
import { Reto20Component } from './reto20/reto20.component';
import { RetoComponent } from './reto/reto.component';
import { Asincrona20Component } from './asincrona20/asincrona20.component';
import { AsincronaComponent } from './asincrona/asincrona.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MensajeComponent } from './mensaje/mensaje.component';
import { RetoformregistroComponent } from './retoformregistro/retoformregistro.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    MenuComponent,
    Reto19Component,
    Reto20Component,
    RetoComponent,
    Asincrona20Component,
    AsincronaComponent,
    LoginComponent,
    MensajeComponent,
    RetoformregistroComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    VistaComponent,
    FormularioComponent,
    BusquedaComponent,
    MenuComponent,
    Reto19Component,
    Reto20Component,
    RetoComponent,
    Asincrona20Component,
    AsincronaComponent,
    LoginComponent,
    MensajeComponent,
    RetoformregistroComponent,
    PerfilComponent
  ],
  providers:[
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UserintersectorService,
      multi: true
    }
  ]
})
export class PrincipalModule { }
