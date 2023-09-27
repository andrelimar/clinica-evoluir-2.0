import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Sexo } from 'src/app/views/models/models';

@Component({
  selector: 'app-form-paciente-part-ii',
  templateUrl: './form-paciente-part-ii.component.html',
  styleUrls: ['./form-paciente-part-ii.component.scss','../../cadastro-paciente.component.scss']
})
export class FormPacientePartIIComponent implements OnInit {

  @Input() formulario_paciente!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
