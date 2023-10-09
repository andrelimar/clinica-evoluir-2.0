import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAgendamentoComponent } from '../../dialog-agendamento/dialog-agendamento.component';


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

   terapeutas: Terapeuta[] = [
      {value: 'terapeuta1', viewValue: '001-ANA KOROLINA'},
      {value: 'terapeuta2', viewValue: '002-PEDRO LIMA'},
      {value: 'terapeuta3', viewValue: '003-WILLIAN PEREIRA'},
    ];
    horarios: Horario[] = [
      {value: 'Horario1', viewValue: '08:30'},
      {value: 'Horario2', viewValue: '09:30'},
      {value: 'Horario3', viewValue: '10:30'},
      {value: 'Horario4', viewValue: '11:30'},
      {value: 'Horario5', viewValue: '14:00'},
      {value: 'Horario6', viewValue: '15:00'},
      {value: 'Horario7', viewValue: '16:00'},
      {value: 'Horario8', viewValue: '17:00'}
    ];

    myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      // Prevent Saturday and Sunday from being selected.

      return day !== 0 && day !== 6;
    };


  constructor(public dialog: MatDialog) { }



  ngOnInit(): void {
  }

  save(){
  this.dialog.open(DialogAgendamentoComponent)

  }

  }

