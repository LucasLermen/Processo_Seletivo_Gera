import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { UnidadeConsumidora } from '../models/unidade-consumidora';

@Injectable({
  providedIn: 'root'
})
export class UnidadeConsumidoraService {

  path = '/UnidadeConsumidora'

  constructor(private http: HttpClient) { 
  }

  getAll(): Observable<UnidadeConsumidora[]> {
		return this.http.get<UnidadeConsumidora[]>(`${environment.url}${this.path}`);
  }

  getById(id: number): Observable<UnidadeConsumidora> {
		return this.http.get<UnidadeConsumidora>(`${environment.url}${this.path}/${id}`);
	}
  
  addUnidadeConsumidora(uc: UnidadeConsumidora): Observable<UnidadeConsumidora> {
    return this.http.post<UnidadeConsumidora>(`${environment.url}${this.path}`,uc);
  }

  editUnidadeConsumidora(id: number, uc: UnidadeConsumidora): Observable<UnidadeConsumidora> {
    return this.http.put<UnidadeConsumidora>(`${environment.url}${this.path}/${id}`,uc);
  }

  deleteUnidadeConsumidora(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.url}${this.path}/${id}`);
  }

}
