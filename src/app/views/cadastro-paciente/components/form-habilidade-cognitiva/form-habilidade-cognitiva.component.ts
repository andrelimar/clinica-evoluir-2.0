import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-habilidade-cognitiva',
  templateUrl: './form-habilidade-cognitiva.component.html',
  styleUrls: ['./form-habilidade-cognitiva.component.scss', '../../cadastro-paciente.component.scss']
})
export class FormHabilidadeCognitivaComponent implements OnInit {

  @Input() formulario_habilidade_cognitiva!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
