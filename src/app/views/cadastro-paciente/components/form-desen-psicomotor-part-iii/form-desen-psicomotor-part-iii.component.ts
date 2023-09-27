import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-desen-psicomotor-part-iii',
  templateUrl: './form-desen-psicomotor-part-iii.component.html',
  styleUrls: ['./form-desen-psicomotor-part-iii.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormDesenPsicomotorPartIIIComponent implements OnInit {

  @Input() formulario_desenvolvimento_psicomotor!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
