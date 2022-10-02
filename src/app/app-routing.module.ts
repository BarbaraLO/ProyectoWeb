import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';
import { FuncionesComponent } from './funciones/funciones.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { CitaComponent } from './cita/cita.component';

const routes: Routes = [ 
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent},
  { path: 'formulario-usuario', component: FormularioUsuarioComponent},
  { path: 'funciones', component: FuncionesComponent},
  { path: 'especialidades', component: EspecialidadesComponent},
  { path: 'calendario', component: CalendarioComponent},
  { path: 'profesionales', component: ProfesionalesComponent},
  { path: 'cita', component: CitaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
