import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { HorariosService } from 'src/app/services/horarios.service';
import { TerapeutasService } from 'src/app/services/terapeutas.service';
import { Terapeuta } from 'src/app/interfaces/Terapeutas';
import { Horario } from 'src/app/interfaces/Horarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-formulario-agendamento',
  templateUrl: './formulario-agendamento.component.html',
  styleUrls: ['./formulario-agendamento.component.scss']
})
export class FormularioAgendamentoComponent implements OnInit {
  agendamento: FormGroup = this._formBuilder.group({
    solicitante: ['', Validators.required],
    terapeuta: ['', Validators.required],
    dataAgendamento: ['', Validators.required],
    horarioAgendamento: ['', Validators.required],
    descricao: ['', Validators.required]
  })

  terapeutas: Terapeuta[] = [];
  horarios: Horario[] = [];
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 6;
  };

  constructor(
    private terapeutaService: TerapeutasService,
    private horariosService: HorariosService,
    private agendamentoService: AgendamentoService,
    private _formBuilder: FormBuilder,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    this.terapeutaService.getAll().pipe(take(1)).subscribe((terapeutas) => this.terapeutas = terapeutas);
    this.horariosService.getAll().pipe(take(1)).subscribe((horarios) => this.horarios = horarios);
  }

  saveData() {
    if(this.agendamento.invalid) {
      this.abrirSnackBar("Preencha todos os campos", "OK");
      return this.agendamento.markAllAsTouched()
    };
    const agendamento = this.agendamento.value;
    this.agendamentoService.salvarAgendamento(agendamento).pipe(take(1)).subscribe({
      next: () => {
        Swal.fire({
          icon: "success",
          title: "Sucesso!",
          text: "Agengamento realizado com sucesso!"
        }).then(() => this.router.navigate(["/admin/agendamento"]))
      }
    })
  }

  cancelar(){
    this.router.navigate(["/admin/agendamento"]);
  }

  abrirSnackBar(message: string, action: string){
    this.matSnackBar.open(message, action)
  }
}

