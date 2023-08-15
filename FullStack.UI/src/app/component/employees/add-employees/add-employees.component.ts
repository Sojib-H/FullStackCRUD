import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css'],
})
export class AddEmployeesComponent implements OnInit {
  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(private employeeService: EmployeesService, private router: Router) {}
  ngOnInit(): void {}

  addEmployee() {
    this.employeeService.addEmployees(this.addEmployeeRequest).subscribe({
      next:(response)=>{
        this.router.navigate(['']);
      }
    })
  }
}
