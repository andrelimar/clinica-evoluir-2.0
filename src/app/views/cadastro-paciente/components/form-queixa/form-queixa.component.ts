import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-queixa',
  templateUrl: './form-queixa.component.html',
  styleUrls: ['./form-queixa.component.scss','../../cadastro-paciente.component.scss']
})
export class FormQueixaComponent implements OnInit {

  @Output('nextSetp') nextSetp: EventEmitter<FormGroup> = new EventEmitter();

  @Input() formulario_queixa!:FormGroup

  constructor(
    private readonly _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  previousStep1(){
    console.log("aqui no filho")
    this.nextSetp.emit(this.formulario_queixa)
  }
}
