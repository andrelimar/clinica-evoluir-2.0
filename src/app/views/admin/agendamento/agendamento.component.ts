import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { Terapeuta } from 'src/app/interfaces/Terapeutas';
import { Horario } from 'src/app/interfaces/Horarios';
import { Agendamento } from 'src/app/interfaces/Agendamento';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit, AfterViewInit {

  terapeutas: Terapeuta[] = [];
  horarios: Horario[] = [];
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  dataSource: MatTableDataSource<Agendamento> = new MatTableDataSource();
  displayedColumns: string[] = ['solicitante', 'terapeuta', 'dataAgendamento', 'horarioAgendamento', "action"];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private agendamentoService: AgendamentoService,
    private router: Router
  ) { }


  ngOnInit(): void {
    this.obterAgendamentos()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obterAgendamentos(){
    this.agendamentoService.obterAgendamentos().subscribe({
      next: (agentamentos) => {
        this.dataSource.data = agentamentos;
      }
    })
  }

  novoAgendamento(){
    this.router.navigate(['/admin/agendamento-cadastro'])
  }

  get length(){
    return this.dataSource.data.length;
  }

  deletarAgendamento(id: string){
    this.agendamentoService.deletarAgendamento(id).subscribe({
      next: () => this.obterAgendamentos()
    })
  }

  abrirModal(id: string){
    Swal.fire({
      icon: "question",
      title:  "Deletar agendamento",
      text: "Você gostaria de remover este agendamento",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      showConfirmButton: true,
      showCancelButton: true
    }).then(reponse => {
      if(reponse.isConfirmed) this.deletarAgendamento(id)
    })
  }
}

