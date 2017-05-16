import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Actions } from './actions';
import { routes } from './routing';

import { ParentComponent } from './component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ParentComponent
    ],
    providers: [
        Actions
    ]
})

export class ParentModule { }
