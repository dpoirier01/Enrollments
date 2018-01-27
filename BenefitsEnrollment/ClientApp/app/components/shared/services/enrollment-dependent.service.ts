import { Injectable } from '@angular/core';
import { Dependent } from '../models/dependent.model';
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
export class EnrollmentDependentService {

    constructor(private http: Http) { }

    private enrollmentDependentUrl = 'http://localhost:5002/enroll'

    addEnrollmentDependent(firstName: string, lastName: string, relationship: string): Observable<any> {

        let dependent = new Dependent();
        dependent.firstName = firstName;
        dependent.lastName = lastName;
        dependent.relationship = relationship;
        dependent.employeeId = 2;

        let bodyString = JSON.stringify(dependent);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.enrollmentDependentUrl, bodyString, options)
            .map(this.extractData)
            .catch(this.handleError);

    }
    private extractData(res: Response) {

        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errorMessage: string;

        errorMessage = error.message ? error.message : error.toString();
        console.debug(errorMessage);
        // In real world application, call to log error to remote server
        // logError(error);

        // This returns another Observable for the observer to subscribe to
        return Observable.throw(errorMessage);
    }
}