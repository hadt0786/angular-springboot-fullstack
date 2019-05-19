import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Employee {
  constructor(
    public empId: String,
    public name: String,
    public designation: String,
    public salary: string


  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getEmployees() {
    console.log("test call");

    return this.httpClient.get<Employee[]>('http://localhost:8080/employees');
  }

  deleteEmployee(employee) {
    return this.httpClient.delete<Employee>("http://localhost:8080/employees" + "/" + employee.empId);
  }

  createEmployee(employee) {
    return this.httpClient.post<Employee>("http://localhost:8080/employees", employee);
  }
}
