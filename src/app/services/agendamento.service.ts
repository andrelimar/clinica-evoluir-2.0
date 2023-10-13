import { Injectable } from '@angular/core';
import { Agendamento } from '../interfaces/Agendamento';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl = 'http://localhost:3000/Agendamentos'

  constructor(private http: HttpClient) {}


}
