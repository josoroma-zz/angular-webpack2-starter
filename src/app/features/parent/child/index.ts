import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@angular/material';

import { ChildComponent } from './component';

import { ChildActions } from './actions';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [
        ChildComponent
    ],
    exports: [
        ChildComponent
    ],
    providers: [
        ChildActions
    ]
})

export class ChildModule { }
