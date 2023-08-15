import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  editEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };
  constructor(
    private employeeService: EmployeesService,
    private route: ActivatedRoute,private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.getEmployee(id).subscribe((data)=>{
            this.editEmployeeRequest=data;
          })
        }
      },
    });
  }

  updateEmployee(){
    this.employeeService.updateEmployees(this.editEmployeeRequest.id,this.editEmployeeRequest).subscribe((data)=>{
      this.router.navigate(['']);
    })
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.editEmployeeRequest.id).subscribe((data)=>{
      this.router.navigate(['']);
    })
  }
}
