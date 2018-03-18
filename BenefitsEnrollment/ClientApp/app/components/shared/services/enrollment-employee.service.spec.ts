import {
    TestBed,
    getTestBed,
    async,
    inject
} from '@angular/core/testing';
import {
    Headers, BaseRequestOptions,
    Response, HttpModule, Http, XHRBackend, RequestMethod
} from '@angular/http';
import { ResponseOptions } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Employee } from '../models/employee.model';
import { EnrollmentEmployeeService } from './enrollment-employee.service';

describe('enrollment employee Service', () => {
    let mockBackend: MockBackend;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            providers: [
                EnrollmentEmployeeService,
                MockBackend,
                BaseRequestOptions,
                {
                    provide: Http,
                    deps: [MockBackend, BaseRequestOptions],
                    useFactory:
                    (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
                        return new Http(backend, defaultOptions);
                    }
                }
            ],
            imports: [
                HttpModule
            ]
        });
        mockBackend = getTestBed().get(MockBackend);
    }));

    it('should get employees', done => {
        let enrollmentEmployeeService: EnrollmentEmployeeService;

        getTestBed().compileComponents().then(() => {
            mockBackend.connections.subscribe(
                (connection: MockConnection) => {
                    connection.mockRespond(new Response(
                        new ResponseOptions({
                            body: [
                                {
                                    firstName: "John",
                                    lastName: "Smith"
                                }]
                        }
                        )));
                });

            enrollmentEmployeeService = getTestBed().get(EnrollmentEmployeeService);
            expect(enrollmentEmployeeService).toBeDefined();

            enrollmentEmployeeService.getAllEmployeesList().subscribe((employees: Employee[]) => {
                expect(employees.length).toBeDefined();
                expect(employees.length).toEqual(1);
                expect(employees[0].firstName).toEqual("John");
                done();
            });
        });
    });

}); 