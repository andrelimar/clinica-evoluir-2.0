import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form-queixa-part-iii',
  templateUrl: './form-queixa-part-iii.component.html',
  styleUrls: ['./form-queixa-part-iii.component.scss','../../cadastro-paciente.component.scss']
})
export class FormQueixaPartIIIComponent implements OnInit {

  @Input() formulario_queixa!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
