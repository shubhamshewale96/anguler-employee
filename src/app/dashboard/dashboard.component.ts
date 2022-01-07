import {Component, OnInit} from '@angular/core';
import{EmployeeService} from '../service/employee.service'

@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  constructor(private apiService: EmployeeService) { }

  ngOnInit(): void {
    this.displayAllEmpDashboard();
  }
  empList:any;
  displayAllEmpDashboard(){
   this.apiService.getAllEmp().subscribe((data)=>{
    this.empList=data;
    });
  }
}
