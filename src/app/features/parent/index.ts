import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { routes } from './routing';

import { MaterialModule } from '@angular/material';

import { ParentActions } from './actions';

import { ParentComponent } from './component';

import { ChildModule } from './child/';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        ChildModule
    ],
    declarations: [
        ParentComponent
    ],
    providers: [
        ParentActions
    ]
})

export class ParentModule { }
