import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Paciente } from 'src/app/views/models/registroAba.model';

@Component({
  selector: 'app-form-programa-paciente-part-ii',
  templateUrl: './form-programa-paciente-part-ii.component.html',
  styleUrls: ['./form-programa-paciente-part-ii.component.scss', '../../programas-paciente.component.scss']
})
export class FormProgramaPacientePartIIComponent implements OnInit {

  @Input() formulario_programas_paciente: FormGroup

  pacientes: Paciente[] = [
    {value: 'paciente1', viewValue: 'JULIANA DE SANTANA FERREIRA'},
    {value: 'paciente2', viewValue: 'CARLOS WILLIAN BITENCOURT DE SANTANA'},
    {value: 'paciente3', viewValue: 'MARIANA DE SALES OLIVEIRA'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
