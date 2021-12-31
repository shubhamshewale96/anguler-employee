import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
const routes: Routes = [{ path: 'empDetail', component: EmployeedetailComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
