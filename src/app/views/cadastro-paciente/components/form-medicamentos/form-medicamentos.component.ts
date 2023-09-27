import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-medicamentos',
  templateUrl: './form-medicamentos.component.html',
  styleUrls: ['./form-medicamentos.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormMedicamentosComponent implements OnInit {

  @Input() formulario_medicamento!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
