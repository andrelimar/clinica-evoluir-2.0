import { Component, OnInit,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-dificuldade-especifica',
  templateUrl: './form-dificuldade-especifica.component.html',
  styleUrls: ['./form-dificuldade-especifica.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormDificuldadeEspecificaComponent implements OnInit {

  @Input() formulario_dificuldade_especifica!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
