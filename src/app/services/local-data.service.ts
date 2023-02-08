import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Data{
  id?: string;
  name: string;
  crimes: string;
  population: number;
  rr:number;
  sir: number;
  month: number;
  year: number;
}

@Injectable({
  providedIn: 'root'
})
export class LocalDataService {

  private readonly API_URL = 'http://localhost:8080/api/';
  
  constructor(
    private httpClient: HttpClient
    ) { 

    }

    getData(year): Observable<Data[]> {
      return this.httpClient.get<any>(this.API_URL+year);
    }
  }
