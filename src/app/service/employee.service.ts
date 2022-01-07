import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl: string = environment.API_URL;
  constructor(private httpClient: HttpClient) { }
  public getEmpDetails(){
    return this.httpClient.get(`${this.apiUrl}/home/greet`);
  }
  public getAllEmp(){
    return this.httpClient.get(`${this.apiUrl}/get`);
  }
}
