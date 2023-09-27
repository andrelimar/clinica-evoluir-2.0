import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-queixa-part-ii',
  templateUrl: './form-queixa-part-ii.component.html',
  styleUrls: ['./form-queixa-part-ii.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormQueixaPartIIComponent implements OnInit {

  @Input() formulario_queixa!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
