import { Observable } from 'rxjs/Observable';
import { Employee } from '../../shared/models/employee.model';

const employeeList: Employee[] = [];
var employee: Employee = {
    firstName: 'John',
    lastName: 'Smith',
    salary: 520000,
    numberOfPayPeriods: 52
};
employeeList.push(employee);

export class MockEmployeeService {

    public getAllEmployeesList(): Observable<Employee[]> {
        return Observable.of(employeeList);
    }
}