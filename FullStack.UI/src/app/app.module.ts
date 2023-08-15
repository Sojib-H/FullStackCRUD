import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesListComponent } from './component/employees/employees-list/employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeesComponent } from './component/employees/add-employees/add-employees.component';
import { FormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './component/employees/edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    AddEmployeesComponent,
    EditEmployeeComponent
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
