import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


interface Terapeuta {
  value: string;
  viewValue: string;
}
interface Horario {
  value: string;
  viewValue: string;
}
export interface DialogData {
  title: string;
  message: string;
}

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {
  // title: string;
  // message: string;


  // formulario: FormGroup = this._formBuilder.group({
  //   nome_paciente: ['',Validators.required,],
  //   data_nascimento: ['',Validators.required,],
  //   idade: ['',Validators.required,],
  //   sexo: ['',Validators.required,],
  //   naturalidade: ['',Validators.required,],
  //   endereco: ['',Validators.required,],
  //   email: ['', Validators.required,],
  // })

   terapeutas: Terapeuta[] = [
      {value: 'terapeuta1', viewValue: '001-ANA KOROLINA'},
      {value: 'terapeuta2', viewValue: '002-PEDRO LIMA'},
      {value: 'terapeuta3', viewValue: '003-WILLIAN PEREIRA'},
    ];
    horarios: Horario[] = [
      {value: 'Horario', viewValue: '08:30'},
      {value: 'Horario', viewValue: '09:30'},
      {value: 'Horario', viewValue: '10:30'},
      {value: 'Horario', viewValue: '11:30'},
      {value: 'Horario', viewValue: '14:00'},
      {value: 'Horario', viewValue: '15:00'},
      {value: 'Horario', viewValue: '16:00'},
      {value: 'Horario', viewValue: '17:00'}
    ];

    myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      // Prevent Saturday and Sunday from being selected.

      return day !== 0 && day !== 6;
    };


  constructor(public dialog: MatDialog) { }



  ngOnInit(): void {
  }

  // save(){
  //   const data = this.formulario.getRawValue()
  //   console.log(data)
  // }

  }

