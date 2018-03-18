import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/index';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentEmployeeService } from '../../shared/services/enrollment-employee.service';

@Component({
    selector: 'benefits-summary',
    templateUrl: './benefits-summary.component.html'
})
export class BenefitsSummaryComponent implements OnInit {
   
    constructor(private router: Router, private EnrollmentEmployeeService: EnrollmentEmployeeService) {

    }

    employeeList: Employee[];

    ngOnInit() {

        this.EnrollmentEmployeeService.getAllEmployeesList().subscribe(data => this.employeeList = data);

    }
}