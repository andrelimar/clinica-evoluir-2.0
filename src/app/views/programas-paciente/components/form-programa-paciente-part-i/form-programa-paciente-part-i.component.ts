import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Programas } from 'src/app/views/models/registroAba.model';

@Component({
  selector: 'app-form-programa-paciente-part-i',
  templateUrl: './form-programa-paciente-part-i.component.html',
  styleUrls: ['./form-programa-paciente-part-i.component.scss', '../../programas-paciente.component.scss']
})
export class FormProgramaPacientePartIComponent implements OnInit {

  numbers: number[] = [];

  programas: Programas[] = [
    {value: 'programa1', viewValue: "Permanecer sentado" },
    {value: 'programa2', viewValue: "Contato vizual"},
    {value: 'programa3', viewValue: "Imitação motora"},
    {value: 'programa4', viewValue: "Seguimento de instruções" },
    {value: 'programa5', viewValue: "Tato simples"},
    {value: 'programa6', viewValue: "Ecoico" },
    {value: 'programa7', viewValue: "Brincar funcional" },
    {value: 'programa8', viewValue: "Mando" },
    {value: 'programa9', viewValue: "Intraverbal" },
    {value: 'programa10', viewValue: "Tato de ações" },
    {value: 'programa11', viewValue: "Tato i14" },
    {value: 'programa12', viewValue: "Consciência social" },
    {value: 'programa13', viewValue: "Boas maneiras"},
    {value: 'programa14', viewValue: "Relato de Historia" },
    {value: 'programa15', viewValue: "LRFFC" },
  ];

  @Input() formulario_programas_paciente: FormGroup

  constructor() { 
    this.numbers = Array.from({ length: 100 }, (v, k) => k + 1);
  }

  ngOnInit(): void {
  }

}
