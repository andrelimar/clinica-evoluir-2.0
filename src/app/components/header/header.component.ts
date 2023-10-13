import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatMenuModule, MatButtonModule]
})
export class HeaderComponent implements OnInit {

  itemsMenu = [
    {
      title: "Agendamentos",
      action: () =>  this.rotas.navigate(['admin/agendamento'])
    },
    {
      title: "Registro ABA",
      action: () =>  this.rotas.navigate(['admin/registro-aba'])
    },
    {
      title: "Cadastrar paciente",
      action: () =>  this.rotas.navigate(['admin/cadastro-paciente'])
    },
    {
      title: "Programas paciente",
      action: () =>  this.rotas.navigate(['admin/programas-paciente'])
    }
  ]

  constructor(
    private rotas: Router
  ) { }

  ngOnInit(): void {
  }
  log_out(){
    this.rotas.navigate([''])
  }
  log_in(){
    this.rotas.navigate(['admin/home'])
  }
}
