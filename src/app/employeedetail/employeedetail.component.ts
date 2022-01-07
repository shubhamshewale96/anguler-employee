import { Component, OnInit } from '@angular/core';
import{EmployeeService} from '../service/employee.service'
@Component({
  selector: 'app-employeedetail',
  templateUrl: './employeedetail.component.html',
  styleUrls: ['./employeedetail.component.css']
})
export class EmployeedetailComponent implements OnInit {

  constructor(private apiService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmpDetail();
  }
  getEmpDetail(){
    this.apiService.getEmpDetails().subscribe((data)=>{
      console.log(data);
      
    });
  }
}
