import { Injectable } from '@angular/core';
import { Horario } from '../interfaces/Horarios';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HorariosService {

  private apiUrl = 'http://localhost:3000/Horarios'

  constructor(private http: HttpClient) {}

  getAll(): Observable<Horario[]> {
    return this.http.get<Horario[]>(this.apiUrl)
  }
}
