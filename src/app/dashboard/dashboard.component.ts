import {Component, OnInit} from '@angular/core';
import { Employee } from '../employee';
import{EmployeeService} from '../service/employee.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
})
export class DashboardComponent implements OnInit{
  constructor(private apiService: EmployeeService,private router:Router) { }
  
  ngOnInit(): void {
    this.displayAllEmpDashboard();
  }
  empList!: Employee[];
 private displayAllEmpDashboard(){
   this.apiService.getAllEmp().subscribe((data)=>{
    this.empList=data;
    });
  }
  //  updateEmp(id:number){
  //   this.router.navigate(['updateemployee',id]);
  // }
  deleteEmployee(id:number){
    this.apiService.deleteEmployee(id).subscribe(data=>{
      console.log(data)},
      error=>{console.log(error)});
    this.displayAllEmpDashboard();
  }
}
