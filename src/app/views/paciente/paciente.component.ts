import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { Paciente } from 'src/app/interfaces/Paciente';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['../admin/agendamento/agendamento.component.scss']
})
export class PacienteComponent implements OnInit, AfterViewInit {



  dataSource: MatTableDataSource<Paciente> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'paciente', "action"];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  obterPacientes(){

  }

  novoPaciente(){
    this.router.navigate(['../cadastro-paciente'])
  }

  get length(){
    return this.dataSource.data.length;
  }

  deletarPaciente(id: string){

  }

  abrirModal(id: string){
    Swal.fire({
      icon: "question",
      title:  "Deletar paciente",
      text: "Você gostaria de remover este paciente?",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
      showConfirmButton: true,
      showCancelButton: true
    }).then(reponse => {
      if(reponse.isConfirmed) this.deletarPaciente(id)
    })
  }
}

