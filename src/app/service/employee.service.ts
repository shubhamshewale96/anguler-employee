import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
import { Observable } from 'rxjs';
import { Employee } from '../employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl: string = environment.API_URL;
  constructor(private httpClient: HttpClient) { }
  // public getEmpDetails(){
  //   return this.httpClient.get(`${this.apiUrl}/home/greet`);
  // }
  public getAllEmp():Observable<Employee[]>{
    
    return this.httpClient.get<Employee[]>(`${this.apiUrl}/get`);
  }
  public createEmployee(employee: Employee):Observable<Object>{
    return this.httpClient.post<Employee[]>(`${this.apiUrl}/add`,employee)
  }
  public deleteEmployee(id:number){
    return this.httpClient.delete(`${this.apiUrl}/delete/${id}`)
  }
}
