import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAgendamentoComponent } from '../../agendamento-dialog/dialog-agendamento.component';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { TerapeutasService } from 'src/app/services/terapeutas.service';
import { Terapeuta } from 'src/app/interfaces/Terapeutas';
import { Horario } from 'src/app/interfaces/Horarios';


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

  name: string ='';
  terapeuta: string='';

  terapeutas: Terapeuta[] = [];

  horarios: Horario[] = [];

    myFilter = (d: Date | null): boolean => {
      const day = (d || new Date()).getDay();
      // Prevent Saturday and Sunday from being selected.

      return day !== 0 && day !== 6;
    };


  constructor(
    public dialog: MatDialog,
    private terapeutaService: TerapeutasService,
    private horariosService: HorariosService )
    {
      this.getTerapeutas()
    }


  ngOnInit(): void {
  }

  save(){
  this.dialog.open(DialogAgendamentoComponent)
  }

  getTerapeutas():
   void{
    this.terapeutaService.getAll().subscribe((terapeutas) => this.terapeutas = terapeutas);
    this.horariosService.getAll().subscribe((horarios) => this.horarios = horarios);
   }

  }

