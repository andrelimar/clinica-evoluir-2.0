import { Injectable } from '@angular/core';
import { Terapeuta } from '../interfaces/Terapeutas';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TerapeutasService {

  private apiUrl = 'http://localhost:3000/terapeutas'

  constructor(private http: HttpClient) {}

  getAll(): Observable<Terapeuta[]> {
    return this.http.get<Terapeuta[]>(this.apiUrl)
  }
}
