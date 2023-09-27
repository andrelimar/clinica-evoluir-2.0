import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AgendamentoComponent, DialogData } from '../admin/agendamento/agendamento.component';

@Component({
  selector: 'app-dialog-agendamento',
  templateUrl: './dialog-agendamento.component.html',
  styleUrls: ['./dialog-agendamento.component.scss']
})
export class DialogAgendamentoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AgendamentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,)
  { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
