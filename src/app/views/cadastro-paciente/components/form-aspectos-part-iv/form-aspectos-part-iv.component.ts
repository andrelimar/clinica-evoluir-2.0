import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-aspectos-part-iv',
  templateUrl: './form-aspectos-part-iv.component.html',
  styleUrls: ['./form-aspectos-part-iv.component.scss','../../cadastro-paciente.component.scss']
})
export class FormAspectosPartIVComponent implements OnInit {

  @Input() formulario_aspectos!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
