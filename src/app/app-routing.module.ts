import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormularioUsuarioComponent } from './formulario-usuario/formulario-usuario.component';

const routes: Routes = [ 
  { path: 'inicio', component: InicioComponent },
  { path: 'inicio-sesion', component: InicioSesionComponent},
  { path: 'formulario-usuario', component: FormularioUsuarioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
