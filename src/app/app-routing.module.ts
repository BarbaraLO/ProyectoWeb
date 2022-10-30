import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InicioSesionService } from 'ProyectoWeb/src/app/inicio-sesion.service';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { CitaComponent } from './cita/cita.component';
import { CitasPendientesComponent } from './citas-pendientes/citas-pendientes.component';
import { FormularioInicioComponent } from './formulario-inicio/formulario-inicio.component';


const routes: Routes = [ 
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio-sesion', component: InicioSesionService},
  { path: 'formulario-usuario', component: FormularioUsuarioComponent},
  { path: 'funciones', component: FuncionesComponent},
  { path: 'especialidades', component: EspecialidadesComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: 'profesionales', component: ProfesionalesComponent},
  { path: 'cita', component: CitaComponent},
  { path: 'citas-pendientes', component: CitasPendientesComponent},
  { path: 'formulario-inicio', component: FormularioInicioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
