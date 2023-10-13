import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/angular-material-module.module';
import { ProgramasPacienteComponent } from './programas-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormProgramaPacientePartIComponent } from './components/form-programa-paciente-part-i/form-programa-paciente-part-i.component';
import { FormProgramaPacientePartIIComponent } from './components/form-programa-paciente-part-ii/form-programa-paciente-part-ii.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HeaderSubtitleComponent } from 'src/app/components/subtitle/subtitle.component';

const routes: Routes = [
  { path: '', component: ProgramasPacienteComponent,
  },
];

@NgModule({
  declarations: [ProgramasPacienteComponent, FormProgramaPacientePartIComponent, FormProgramaPacientePartIIComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    HeaderComponent,
    HeaderSubtitleComponent
  ],
  exports: [ProgramasPacienteComponent]
})
export class ProgramasPacienteModule { }
