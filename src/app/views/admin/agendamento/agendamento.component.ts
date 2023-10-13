import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAgendamentoComponent } from '../../agendamento-dialog/dialog-agendamento.component';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { TerapeutasService } from 'src/app/services/terapeutas.service';
import { Terapeuta } from 'src/app/interfaces/Terapeutas';
import { Horario } from 'src/app/interfaces/Horarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';


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
  agendamento : FormGroup = this._formBuilder.group({
    solicitante:  ['', Validators.required],
    nomeTerapeuta:  ['', Validators.required],
    dataAgendamento:  ['', Validators.required],
    horarioAgendamento:  ['', Validators.required],
    descricao:  ['', Validators.required]
  })


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
    private horariosService: HorariosService,
    private agendamentoService: AgendamentoService,
    private _formBuilder: FormBuilder)
    { }


  ngOnInit(): void {
    this.terapeutaService.getAll().pipe(take(1)).subscribe((terapeutas) => this.terapeutas = terapeutas);
    this.horariosService.getAll().pipe(take(1)).subscribe((horarios) => this.horarios = horarios);
  }

  saveData(){
    const agendamento  = this.agendamento.value;
    this.agendamentoService.salvarAgendamento(agendamento).pipe(take(1)).subscribe({
      next: () => {
        this.agendamento.reset();
        this.agendamento.markAsUntouched();
        this.dialog.open(DialogAgendamentoComponent)
      }
    })
  }
  }

