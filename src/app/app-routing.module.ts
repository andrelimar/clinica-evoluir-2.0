import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'cadastro-paciente',
    loadChildren: () =>import('./views/cadastro-paciente/cadastro-paciente.module').then((m) => m.CadastroPacienteModule),
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), 
    RouterModule
  ],
  
})
export class AppRoutingModule { }
