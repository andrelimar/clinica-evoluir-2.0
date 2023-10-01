import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { RegistroAbaComponent } from './registro-aba/registro-aba.component';
import { HomeComponent } from './home/home.component';
import { DialogAgendamentoComponent } from '../dialog-agendamento/dialog-agendamento.component';
import { MaterialModule } from 'src/app/angular-material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'registro-aba', component: RegistroAbaComponent },
  {
    path: 'cadastro-paciente',
    loadChildren: () =>import('../cadastro-paciente/cadastro-paciente.module').then((m) => m.CadastroPacienteModule),
  },
  {
    path: 'programas-paciente',
    loadChildren: () =>import('../programas-paciente/programas-paciente.module').then((m) => m.ProgramasPacienteModule),
  },
];

@NgModule({
  declarations: [
    AdminComponent,
    AgendamentoComponent,
    RegistroAbaComponent,
    HomeComponent,
    DialogAgendamentoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HeaderComponent
  ]
})
export class AdminModule { }
