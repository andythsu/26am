import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DayCounterComponent } from './daycounter.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DayCounterComponent],
  exports: [DayCounterComponent]
})
export class DaycounterModule { }
