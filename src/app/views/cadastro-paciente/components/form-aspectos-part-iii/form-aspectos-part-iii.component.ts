import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-aspectos-part-iii',
  templateUrl: './form-aspectos-part-iii.component.html',
  styleUrls: ['./form-aspectos-part-iii.component.scss','../../cadastro-paciente.component.scss']
})
export class FormAspectosPartIIIComponent implements OnInit {

  @Input() formulario_aspectos!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
