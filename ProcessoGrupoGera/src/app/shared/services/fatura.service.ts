import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Fatura } from '../models/fatura';


@Injectable({
  providedIn: 'root'
})
export class FaturaService {

  path = '/Fatura'

  constructor(private http: HttpClient) { 
  }

  getAll(): Observable<Fatura[]> {
		return this.http.get<Fatura[]>(`${environment.url}${this.path}`);
  }
  
  getById(id: number): Observable<Fatura> {
		return this.http.get<Fatura>(`${environment.url}${this.path}/${id}`);
	}
  
  addFatura(fat: Fatura): Observable<Fatura> {
    return this.http.post<Fatura>(`${environment.url}${this.path}`,fat);
  }

  editFatura(id: number, uc: Fatura): Observable<Fatura> {
    return this.http.put<Fatura>(`${environment.url}${this.path}/${id}`,uc);
  }

  deleteFatura(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.url}${this.path}/${id}`);
  }
}
