import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-aspectos-part-v',
  templateUrl: './form-aspectos-part-v.component.html',
  styleUrls: ['./form-aspectos-part-v.component.scss','../../cadastro-paciente.component.scss']
})
export class FormAspectosPartVComponent implements OnInit {

  @Input() formulario_aspectos!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
