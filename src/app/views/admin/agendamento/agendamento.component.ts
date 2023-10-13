import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAgendamentoComponent } from '../../agendamento-dialog/dialog-agendamento.component';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { TerapeutasService } from 'src/app/services/terapeutas.service';
import { Terapeuta } from 'src/app/interfaces/Terapeutas';
import { Horario } from 'src/app/interfaces/Horarios';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';


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

  agendamentosControlsArray!: FormArray

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
    private _formBuilder: FormBuilder)
    {
      this.getTerapeutas()
    }


  ngOnInit(): void {
  }

  saveData(){
    this.agendamentosControlsArray.push(this._formBuilder.group({
      solicitante: [this.agendamento.get('solicitante')?.value],
      nomeTerapeuta: [this.agendamento.get('nomeTerapeuta')?.value],
      dataAgendamento:[this.agendamento.get('dataAgendamento')?.value],
      horarioAgendamento: [this.agendamento.get('horarioAgendamento')?.value],
      descricao: [this.agendamento.get('descricao')?.value]


    }))

    const Agendamento = this.agendamento.getRawValue()
    console.log(Agendamento)

    this.dialog.open(DialogAgendamentoComponent)
  }

  getTerapeutas():
   void{
    this.terapeutaService.getAll().subscribe((terapeutas) => this.terapeutas = terapeutas);
    this.horariosService.getAll().subscribe((horarios) => this.horarios = horarios);
   }

  }

