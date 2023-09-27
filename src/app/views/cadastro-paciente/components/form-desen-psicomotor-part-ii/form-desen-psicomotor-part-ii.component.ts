import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-desen-psicomotor-part-ii',
  templateUrl: './form-desen-psicomotor-part-ii.component.html',
  styleUrls: ['./form-desen-psicomotor-part-ii.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormDesenPsicomotorPartIIComponent implements OnInit {

  @Input() formulario_desenvolvimento_psicomotor!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
