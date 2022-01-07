import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { DashboardComponent } from './dashboard/dashboard.component'
const routes: Routes = 
[
{ path:'viewEmp', component:DashboardComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
