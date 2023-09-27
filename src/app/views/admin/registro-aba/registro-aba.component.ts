import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Paciente, Programa, Legendas } from '../../models/registroAba.model';

@Component({
  selector: 'app-registro-aba',
  templateUrl: './registro-aba.component.html',
  styleUrls: ['./registro-aba.component.scss']
})
export class RegistroAbaComponent implements OnInit {

  pacientes: Paciente[] = [
    {value: 'paciente1', viewValue: 'JULIANA DE SANTANA FERREIRA'},
    {value: 'paciente2', viewValue: 'CARLOS WILLIAN BITENCOURT DE SANTANA'},
    {value: 'paciente3', viewValue: 'MARIANA DE SALES OLIVEIRA'},
  ];
  programas: Programa[] = [
    {value: 'programa1', viewValue: '0441 - Reação'},
    {value: 'programa2', viewValue: '0518 - Chamado'},
    {value: 'programa3', viewValue: '1558 - Toque'},
  ];
  legendas: Legendas[] = [
    {value: 'legenda1', viewValue: 'AT - Ajuda Total'},
    {value: 'legenda2', viewValue: 'AP - Ajuda Parcial'},
    {value: 'legenda3', viewValue: 'A  - Acerto'},
    {value: 'legenda4', viewValue: 'E  - Erro'},
    {value: 'legenda5', viewValue: 'AE - Acerto com ecoicos'},
    {value: 'legenda6', viewValue: 'EE - Erros com ecoicos'},
  ];

  formulario: FormGroup = this._formBuilder.group({
    nome_paciente: ['',Validators.required,],
    programas: ['',Validators.required,],
    tentativas: ['',Validators.required,],
  })

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  save(){
    const data = this.formulario.getRawValue()
    console.log(data)
  }
}
