import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-aspectos',
  templateUrl: './form-aspectos.component.html',
  styleUrls: ['./form-aspectos.component.scss','../../cadastro-paciente.component.scss']
})
export class FormAspectosComponent implements OnInit {

  @Input() formulario_aspectos!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
