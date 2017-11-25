import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Http, Response, Headers, RequestOptions, URLSearchParams }
    from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class EnrollmentEmployeeService {

    constructor(private http: Http) { }

    addEnrollmentEmployee(firstName: string, lastName: string, salary: number, numberOfPayPeriods: number): Observable<any> {
       
        let enrollmentEmployeeUrl = 'http://localhost:5001/enroll'

        let employee = new Employee();
        employee.firstName = firstName;
        employee.lastName = lastName;
        employee.salary = salary;
        employee.numberOfPayPeriods = numberOfPayPeriods;

        let bodyString = JSON.stringify(employee);
        let headers = new Headers({ 'Content-Type': 'application/json' }); 
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(enrollmentEmployeeUrl, bodyString, options)
            .map(this.extractData)
            .catch(this.handleError);
        
    }

    getAllEmployeesList() {

        let getEmployeeListUrl = 'http://localhost:5001/getAllEmployees'

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.get(getEmployeeListUrl, options)
            .map((res: Response) => res.json());
    }

    private extractData(res: Response) {
        
        let body = res.json();
        return body.data || {};
    }
   
    private handleError(error: Response | any) {
        let errorMessage: string;

        errorMessage = error.message ? error.message : error.toString();
        console.debug(errorMessage);
    
        return Observable.throw(errorMessage);
    }
}