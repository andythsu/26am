import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import './datepicker/datepicker.component.js';
import './timepicker/timepicker.component.js';

@Component({
  selector: 'inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputformComponent implements OnInit {

  @ViewChild('inputBox') inputBox;
  @ViewChild('timepicker') timePicker;
  @ViewChild('datepicker') datePicker;

  constructor() { }

  ngOnInit() {
  }

  onEnter(){
    console.log(this.inputBox.nativeElement.value, " is entered");
    console.log(this.datePicker.nativeElement.value, " is entered");
    console.log(this.timePicker.nativeElement.value, " is entered");
    this.setInputBoxValue('');
    this.setDatePickerValue('');
    this.setTimePickerValue('');
  }
  
  setInputBoxValue(val){
    this.inputBox.nativeElement.value = val;
  }

  setDatePickerValue(val){
    this.datePicker.nativeElement.value = val;
  }

  setTimePickerValue(val){
    this.timePicker.nativeElement.value = val;
  }
  
}
