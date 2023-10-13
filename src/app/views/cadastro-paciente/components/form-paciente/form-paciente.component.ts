import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Sexo } from 'src/app/views/models/models';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormPacienteComponent implements OnInit {

  @Input() formulario_paciente!:FormGroup

  @Output() formularioPacienteValue: EventEmitter<FormGroup> = new EventEmitter()

  sexos: Sexo[] = [
    {value: 'sexo_masculino', viewValue: 'MASCULINO'},
    {value: 'sexo_feminino', viewValue: 'FEMININO'},
  ];


  next: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
