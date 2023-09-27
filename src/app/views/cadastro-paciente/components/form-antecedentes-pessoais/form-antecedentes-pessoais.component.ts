import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-antecedentes-pessoais',
  templateUrl: './form-antecedentes-pessoais.component.html',
  styleUrls: ['./form-antecedentes-pessoais.component.scss','../../cadastro-paciente.component.scss']
})
export class FormAntecedentesPessoaisComponent implements OnInit {

  @Input()
  formulario_antecedentes_pessoais!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
