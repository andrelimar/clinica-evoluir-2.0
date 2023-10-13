import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { RegistroAbaComponent } from './registro-aba/registro-aba.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from 'src/app/angular-material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FormularioAgendamentoComponent } from './formulario-agendamento/formulario-agendamento.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HeaderSubtitleComponent } from 'src/app/components/subtitle/subtitle.component';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: 'home', component: HomeComponent },
    { path: 'agendamento', component: AgendamentoComponent },
    { path: 'agendamento-cadastro', component: FormularioAgendamentoComponent },
    { path: 'registro-aba', component: RegistroAbaComponent },
    {
      path: 'cadastro-paciente',
      loadChildren: () =>import('../cadastro-paciente/cadastro-paciente.module').then((m) => m.CadastroPacienteModule),
    },
    {
      path: 'programas-paciente',
      loadChildren: () =>import('../programas-paciente/programas-paciente.module').then((m) => m.ProgramasPacienteModule),
    },
  ] },
];

@NgModule({
  declarations: [
    AdminComponent,
    AgendamentoComponent,
    RegistroAbaComponent,
    HomeComponent,
    FormularioAgendamentoComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    MatPaginatorModule,
    HeaderSubtitleComponent,
    MatSnackBarModule
  ]
})
export class AdminModule { }
