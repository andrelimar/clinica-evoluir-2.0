import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form-desen-crianca',
  templateUrl: './form-desen-crianca.component.html',
  styleUrls: ['./form-desen-crianca.component.scss','../../cadastro-paciente.component.scss']
})
export class FormDesenCriancaComponent implements OnInit {

  @Input() formulario_desenvolvimento_crianca!: FormGroup

  @Output() save = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  submitForm(){
    this.save.emit()
  }
}
