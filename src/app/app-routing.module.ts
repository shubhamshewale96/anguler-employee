import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddformComponent } from './addform/addform.component';
// import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
const routes: Routes = 
[
{ path:'allemployee', component:DashboardComponent}, 
{ path:'',redirectTo:'allemployee',pathMatch:'full'},
{ path:'addemployee',component:AddformComponent},
{ path:'updateemployee/:id',component:UpdateemployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
