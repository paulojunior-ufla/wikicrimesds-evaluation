import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';


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

  private readonly LOCAL_DATA_URL = '../../assets/json/data.json';
  
  constructor(
    private httpClient: HttpClient
    ) { 

    }

    getData(year): Observable<Data[]> {
      return this.httpClient.get<any>(this.LOCAL_DATA_URL).pipe(
        map(data => data.region_data),
      );
    }
  }
