import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// components
import { AppComponent } from './components/app/app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { EnrollmentEmployeeComponent } from './components/enrollment/enrollment-employee/enrollment-employee.component';
import { EnrollmentDependentComponent } from './components/enrollment/enrollment-dependent/enrollment-dependent.component';

// services
import { EnrollmentEmployeeService } from './components/shared/services/enrollment-employee.service';
import { EnrollmentDependentService } from './components/shared/services/enrollment-dependent.service';

// models
import { Employee } from './components/shared/models/employee.model';
import { Dependent } from './components/shared/models/dependent.model';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        EnrollmentEmployeeComponent,
        EnrollmentDependentComponent
    ],
    providers: [
        EnrollmentEmployeeService,
        EnrollmentDependentService
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            //{ path: '**', redirectTo: 'home' },
            { path: 'EnrollEmployee', component: EnrollmentEmployeeComponent },
            { path: 'EnrollDependent', component: EnrollmentDependentComponent }
        ])
    ]
})
export class AppModuleShared {
}
