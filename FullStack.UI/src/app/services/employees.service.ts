import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseApiUrl='https://localhost:44362';
  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employees');
  }

  addEmployees(addEmployeeRequest: Employee): Observable<Employee>{
    addEmployeeRequest.id='00000000-0000-0000-0000-000000000000';
    return this.http.post<Employee>(this.baseApiUrl+'/api/Employees',addEmployeeRequest);
  }

  getEmployee(id: string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/Employees/'+id);
  }

  updateEmployees(id:string, updateEmployeeRequest: Employee): Observable<Employee>{
    return this.http.put<Employee>(this.baseApiUrl+'/api/Employees/'+id,updateEmployeeRequest);
  }

  deleteEmployee(id:string):Observable<Employee>{
    return this.http.delete<Employee>(this.baseApiUrl+'/api/Employees/'+id);
  }
}
