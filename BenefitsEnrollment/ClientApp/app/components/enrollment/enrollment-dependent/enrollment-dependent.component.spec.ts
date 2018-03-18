import {
    TestBed,
    getTestBed,
    async,
    inject,
    ComponentFixture
} from '@angular/core/testing';
import { EnrollmentDependentComponent } from '../enrollment-dependent/enrollment-dependent.component';
import { EnrollmentDependentService } from '../../shared/services/enrollment-dependent.service';
import { EnrollmentEmployeeService } from '../../shared/services/enrollment-employee.service';
import { Employee } from '../../shared/models/employee.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { MockEmployeeService } from '../../shared/services/enrollment-employee.service.stub';
import { MockDependentService } from '../../shared/services/enrollment-dependent.service.stub';
import { } from 'jasmine';

describe('Component: enrollment-dependent component', () => {
    
    let comp: EnrollmentDependentComponent;
    let fixture: ComponentFixture<EnrollmentDependentComponent>;
    let mockEmployeeService: EnrollmentEmployeeService;
    let mockDependentService: EnrollmentDependentService;
    let employeeList: Employee[] = [];
    
    beforeEach(() => {
        
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([])],
            declarations: [EnrollmentDependentComponent],
            providers: [
                { provide: EnrollmentEmployeeService, useClass: MockEmployeeService},
                { provide: EnrollmentDependentService, useClass: MockDependentService }
            ]
        });

        fixture = TestBed.createComponent(EnrollmentDependentComponent);
        comp = fixture.componentInstance;
        var debugEl = fixture.debugElement;
        var element = fixture.nativeElement;
        mockEmployeeService = TestBed.get(EnrollmentEmployeeService);
        mockDependentService = TestBed.get(EnrollmentDependentService);

        spyOn(mockEmployeeService, 'getAllEmployeesList').and.returnValue(Observable.of(employeeList));
        spyOn(mockDependentService, 'addEnrollmentDependent').and.returnValue(Observable.of(true));
    });

    it('should call getEmployeesList service', () => {
        comp.ngOnInit();
        
        expect(mockEmployeeService.getAllEmployeesList).toHaveBeenCalled();
    });

    it('should call addEnrollmentDependent', () => {
        let formValues = {};
        comp.saveEnrollmentDependent(formValues);

        expect(mockDependentService.addEnrollmentDependent).toHaveBeenCalled();
    });

});
