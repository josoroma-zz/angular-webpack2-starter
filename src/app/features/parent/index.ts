import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ParentActions } from './parent.actions';
import { routes } from './parent.routing';

import { ParentComponent } from './parent.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ParentComponent
    ],
    providers: [
        ParentActions
    ]
})

export class ParentModule { }
