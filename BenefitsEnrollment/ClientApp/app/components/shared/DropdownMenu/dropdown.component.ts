import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

//export class DropdownValue {
//    value: string;
//    label: string;

//    constructor(value: string, label: string) {
//        this.value = value;
//        this.label = label;
//    }
//}

//@Component({
//    selector: 'dropdown',
//    template: `
//    <ul>
//      <li *ngFor="let value of values" (click)="selectItem(value.value)">{{value.label}}</li>
//    </ul>
//  `
//})
//export class DropdownComponent {
//    @Input()
//    values: DropdownValue[];

//    @Output()
//    select: EventEmitter<any>;

//    constructor() {
//        this.select = new EventEmitter();
//    }

//    selectItem(value: any) {
//        this.select.emit(value);
//    }
//}