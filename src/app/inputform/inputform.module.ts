import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputformComponent } from './inputform.component';

import { 
 MatFormFieldModule,
 MatInputModule,
 MatDatepickerModule,
 MatNativeDateModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [InputformComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [InputformComponent]
})
export class InputformModule { }
