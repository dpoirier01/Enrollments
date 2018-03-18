import {
    TestBed,
    getTestBed,
    async,
    inject,
    ComponentFixture
} from '@angular/core/testing';
import { BenefitsSummaryComponent } from '../benefits-summary/benefits-summary.component';
import { EnrollmentDependentService } from '../../shared/services/enrollment-dependent.service';
import { EnrollmentEmployeeService } from '../../shared/services/enrollment-employee.service';
import { Employee } from '../../shared/models/employee.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { MockEmployeeService } from '../../shared/services/enrollment-employee.service.stub';
import { } from 'jasmine';

describe('Component: enrollment-dependent component', () => {

    let comp: BenefitsSummaryComponent;
    let fixture: ComponentFixture<BenefitsSummaryComponent>;
    let mockEmployeeService: EnrollmentEmployeeService;
    let employeeList: Employee[] = [];

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, RouterTestingModule.withRoutes([])],
            declarations: [BenefitsSummaryComponent],
            providers: [
                { provide: EnrollmentEmployeeService, useClass: MockEmployeeService }
            ]
        });

        fixture = TestBed.createComponent(BenefitsSummaryComponent);
        comp = fixture.componentInstance;
        var debugEl = fixture.debugElement;
        var element = fixture.nativeElement;
        mockEmployeeService = TestBed.get(EnrollmentEmployeeService);

        spyOn(mockEmployeeService, 'getAllEmployeesList').and.returnValue(Observable.of(employeeList));
    });

    it('should call getEmployeesList service', () => {
        comp.ngOnInit();

        expect(mockEmployeeService.getAllEmployeesList).toHaveBeenCalled();
    });

    it('should call getBenefitsSummary', () => {
        // pass employee id 
    });
});