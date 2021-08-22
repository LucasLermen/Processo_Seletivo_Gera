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
}
