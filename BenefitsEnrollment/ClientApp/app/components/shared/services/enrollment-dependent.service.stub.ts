import { Observable } from 'rxjs/Observable';
import { Employee } from '../../shared/models/employee.model';

export class MockDependentService {

    public addEnrollmentDependent(firstName: string, lastName: string, relationship: string, employeeId: number): Observable<any> {
        return Observable.of(true);
    }
}