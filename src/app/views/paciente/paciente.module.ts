import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteComponent } from './paciente.component';
import { MaterialModule } from 'src/app/angular-material-module.module';
import { PacienteRoutingModule } from './paciente.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { HeaderSubtitleComponent } from 'src/app/components/subtitle/subtitle.component';

@NgModule({
  declarations: [
    PacienteComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PacienteRoutingModule,
    ReactiveFormsModule,
    HeaderComponent,
    HeaderSubtitleComponent
  ],
})
export class PacienteModule { }
