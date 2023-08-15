import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './component/employees/employees-list/employees-list.component';
import { AddEmployeesComponent } from './component/employees/add-employees/add-employees.component';
import { EditEmployeeComponent } from './component/employees/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeesListComponent,
  },
  {
    path: 'employees/add',
    component: AddEmployeesComponent,
  },
  {
    path: 'employees/edit/:id',
    component: EditEmployeeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
