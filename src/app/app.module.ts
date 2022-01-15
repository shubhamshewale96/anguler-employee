import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeedetailComponent } from './employeedetail/employeedetail.component';
import { AddformComponent } from './addform/addform.component';
import { FormsModule } from '@angular/forms';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeedetailComponent,
    DashboardComponent,
    AddformComponent,
    UpdateemployeeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
