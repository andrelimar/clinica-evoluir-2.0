import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-aprendizado-escolarizacao-part-ii',
  templateUrl: './form-aprendizado-escolarizacao-part-ii.component.html',
  styleUrls: ['./form-aprendizado-escolarizacao-part-ii.component.scss','../../cadastro-paciente.component.scss']
})
export class FormAprendizadoEscolarizacaoPartIIComponent implements OnInit {

  @Input() formulario_aprendizado_escolarizacao!:FormGroup

  @Output() nextStep4 = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  goTonextStep4(){
    this.nextStep4.emit()
  }

}
