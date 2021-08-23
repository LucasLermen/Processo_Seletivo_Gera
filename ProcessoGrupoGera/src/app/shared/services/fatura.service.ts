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
}
