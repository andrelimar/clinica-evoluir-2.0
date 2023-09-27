import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';


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

  log_in(){
    this.rotas.navigateByUrl('admin/home');
  }
}
