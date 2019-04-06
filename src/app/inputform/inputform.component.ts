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
  templateUrl: "./inputform.component.html",
  styleUrls: ["./inputform.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class InputformComponent implements OnInit {
  @ViewChild("inputBox") inputBox;
  @ViewChild("timepicker") timePicker;
  @ViewChild("datepicker") datePicker;

  @Output() alertEmitter = new EventEmitter<any>();

  constructor(private listService: ListService) {}

  ngOnInit() {}

  onEnter() {
    const name = this.inputBox.nativeElement.value;
    const date = this.datePicker.nativeElement.value;
    let time = this.timePicker.nativeElement.value;
    if (!name || !date) {
      this.alertEmitter.emit({
        message: "name or date cannot be undefined",
        type: "danger"
      });
      return;
    }

    if (!time) {
      time = "12:00";
    }

    this.listService
      .addToList(name, date, time)
      .then(() => {
        this.setInputBoxValue("");
        this.setDatePickerValue("");
        this.setTimePickerValue("");
      })
      .catch(err => {
        console.error(err);
      });
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
