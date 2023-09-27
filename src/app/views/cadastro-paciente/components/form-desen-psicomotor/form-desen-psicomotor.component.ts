import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-desen-psicomotor',
  templateUrl: './form-desen-psicomotor.component.html',
  styleUrls: ['./form-desen-psicomotor.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormDesenPsicomotorComponent implements OnInit {

  @Input() formulario_desenvolvimento_psicomotor!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
