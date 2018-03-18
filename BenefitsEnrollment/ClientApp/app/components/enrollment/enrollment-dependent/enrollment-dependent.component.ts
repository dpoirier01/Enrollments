import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/index';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EnrollmentDependentService } from '../../shared/services/enrollment-dependent.service';
import { EnrollmentEmployeeService } from '../../shared/services/enrollment-employee.service';

@Component({
    selector: 'enrollment-dependent',
    templateUrl: './enrollment-dependent.component.html'
})
export class EnrollmentDependentComponent implements OnInit {
    enrollmentDependentForm: FormGroup;
    selectedEmployee: number;

    constructor(private router: Router, private enrollmentDependentService: EnrollmentDependentService, private EnrollmentEmployeeService: EnrollmentEmployeeService) {

    }

    employeeList: Employee[];

    ngOnInit() {

        this.EnrollmentEmployeeService.getAllEmployeesList().subscribe(data => this.employeeList = data);

        let firstName = new FormControl();
        let lastName = new FormControl();
        let relationship = new FormControl();
        this.enrollmentDependentForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
            relationship: relationship
        });
    }

    onChange(employeeId: number) {
        this.selectedEmployee = employeeId;
    }
    
    saveEnrollmentDependent(formValues: any) {
        
        this.enrollmentDependentService.addEnrollmentDependent(formValues.firstName, formValues.lastName, formValues.relationship, this.selectedEmployee)
            .subscribe(
            result => console.log(result)//,
            //error => this.errorMessage = <any>error
            );
    }

    cancel() {
        this.router.navigate([''])
    }
}