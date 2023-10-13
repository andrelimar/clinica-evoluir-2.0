import { Injectable } from '@angular/core';
import { Agendamento } from '../interfaces/Agendamento';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private apiUrl = 'http://localhost:3000/agendamentos'

  constructor(private http: HttpClient) {}


  salvarAgendamento(agendamento: Agendamento): Observable<Agendamento>{
    return this.http.post<Agendamento>(this.apiUrl, agendamento);
  }

  obterAgendamentos(): Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(this.apiUrl);
  }

  deletarAgendamento(id: string): Observable<Agendamento[]>{
    const url = `${this.apiUrl}/${id}`
    return this.http.delete<Agendamento[]>(url);
  }
}
