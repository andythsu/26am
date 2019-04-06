import {
  Component,
  OnInit,
  ViewEncapsulation,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";

import "./datepicker/datepicker.component.js";
import "./timepicker/timepicker.component.js";
import { ListService } from "../list/list.service.js";

@Component({
  selector: "inputform",
  providers: [ListService],
  templateUrl: "./inputform.component.html",
  styleUrls: ["./inputform.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class InputformComponent implements OnInit {
  @ViewChild("inputBox") inputBox;
  @ViewChild("timepicker") timePicker;
  @ViewChild("datepicker") datePicker;

  constructor(private listService: ListService) {}

  ngOnInit() {}

  onEnter() {
    const name = this.inputBox.nativeElement.value;
    const date = this.datePicker.nativeElement.value;
    const time = this.timePicker.nativeElement.value;
    this.setInputBoxValue("");
    this.setDatePickerValue("");
    this.setTimePickerValue("");
    this.listService.addToList(name, date, time);
  }

  setInputBoxValue(val) {
    this.inputBox.nativeElement.value = val;
  }

  setDatePickerValue(val) {
    this.datePicker.nativeElement.value = val;
  }

  setTimePickerValue(val) {
    this.timePicker.nativeElement.value = val;
  }
}
