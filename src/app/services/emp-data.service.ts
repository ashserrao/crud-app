import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IEmployee } from './models/emp-data.model'

@Injectable({
  providedIn: 'root'
})
export class EmpDataService {

  constructor(private _http:HttpClient) { }

  addEmp(data: any): Observable<IEmployee>{
    return this._http.post<IEmployee>('http://localhost:3000/employee', data);
  }

  updateEmp(id: number, data: any): Observable<IEmployee>{
    return this._http.put<IEmployee>(`http://localhost:3000/employee/${id}`, data);
  }

  getEmp(): Observable<IEmployee>{
    return this._http.get<IEmployee>('http://localhost:3000/employee')
  }

  deleteEmp(id: number): Observable<IEmployee>{
      return this._http.delete<IEmployee>(`http://localhost:3000/employee/${id}`)
  }
}
