import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-aprendizado-escolarizacao',
  templateUrl: './form-aprendizado-escolarizacao.component.html',
  styleUrls: ['./form-aprendizado-escolarizacao.component.scss','../../cadastro-paciente.component.scss']
})
export class FormAprendizadoEscolarizacaoComponent implements OnInit {

  @Output('nextSetp') nextSetp: EventEmitter<any> = new EventEmitter();

  @Input() formulario_aprendizado_escolarizacao!:FormGroup

  constructor() { }

  ngOnInit(): void {
  }

  previousStep2(){
    this.nextSetp.emit()
  }

}
