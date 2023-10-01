import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
