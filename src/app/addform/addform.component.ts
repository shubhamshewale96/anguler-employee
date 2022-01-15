import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { Employee } from '../employee';
import { EmployeeService } from '../service/employee.service';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent implements OnInit {
  employee:Employee = new Employee();
    
  constructor(private employeeService : EmployeeService,
    private router : Router) { }
    
    day!:string;
    month!:string; 
    year!:string;
    date:string=this.year+'-'+this.month+'-'+this.day;

    
    departments=[ {id:'hr', name:'hr', value:'HR', select:false},
    {id:'sales', name:'sales', value:'Sales', select:false},
    {id:'finance', name:'finance', value:'Finance', select:false},
    {id:'engineer', name:'engineer', value:'Engineer', select:false},
    {id:'others', name:'others', value:'Others', select:false} ];

  ngOnInit(): void {
  
  }
  
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goToDashBoard();
    },
  //   error=>{
  //     console.log(error)
  //  }
  )
  }

  goToDashBoard(){
    this.router.navigate(['/allemployee']);
  }
  onSubmit(){
    console.log(this.employee)
    this.saveEmployee();
  }

  onChangeDept($event:any){
    if($event.target.checked){
      this.employee.department.push($event.target.value);
    }
  }
}
