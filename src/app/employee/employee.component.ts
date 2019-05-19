import { HttpClientService, Employee } from './../service/httpclient.service';
// import { HttpClient } from 'selenium-webdriver/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private httpClient: HttpClientService) { }

  employee: string[];

  ngOnInit() {

    this.httpClient.getEmployees().subscribe(data => {
      // console.log("data==>", data);
      this.successRender(data);
    }, error => {
      console.log(error);
    });


    // console.log(this.HttpClient, " http client ");
  }

  deleteEmployee(employee: Employee): void {
    this.httpClient.deleteEmployee(employee)
      .subscribe(data => {
        this.employee = this.employee.filter(u => {
          // u != employee;
        });
      })
  };

  successRender(data) {
    this.employee = data;
  }

}
