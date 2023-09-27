import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-aspectos-part-ii',
  templateUrl: './form-aspectos-part-ii.component.html',
  styleUrls: ['./form-aspectos-part-ii.component.scss','../../cadastro-paciente.component.scss']
})
export class FormAspectosPartIiComponent implements OnInit {

  @Input() formulario_aspectos!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
