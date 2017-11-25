import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/index';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentEmployeeService } from '../../shared/services/enrollment-employee.service';

@Component({
    selector: 'enrollment-employee',
    templateUrl: './enrollment-employee.component.html'
})
export class EnrollmentEmployeeComponent implements OnInit {
    enrollmentEmployeeForm: FormGroup

    constructor(private router: Router, private enrollmentEmployeeService: EnrollmentEmployeeService) {

    }

    ngOnInit() {
        let firstName = new FormControl();
        let lastName = new FormControl();
        let salary = new FormControl();
        let numberOfPayPeriods = new FormControl();
        this.enrollmentEmployeeForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
            salary: salary,
            numberOfPayPeriods: numberOfPayPeriods
        });
    }

    saveEnrollmentEmployee(formValues: any) {
        this.enrollmentEmployeeService.addEnrollmentEmployee(formValues.firstName, formValues.lastName, formValues.salary, formValues.numberOfPayPeriods)
            .subscribe(
            result => console.log(result)//,
            //error => this.errorMessage = <any>error
            );
    }

    cancel() {
        this.router.navigate([''])
    }
}