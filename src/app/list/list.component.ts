import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ListService } from "./list.service";

import { DateUtil } from "../class/index";

import { faTrash } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  faTrash = faTrash;
  constructor(public listService: ListService) {}

  ngOnInit() {}

  onRemoveUpcomingEvent(event) {
    this.listService
      .removeUpcomingEvent(event)
      .then()
      .catch(error => {
        console.error(error);
      });
  }

  onRemoveOldEvent(event) {
    this.listService
      .removeOldEvent(event)
      .then()
      .catch(error => {
        console.error(error);
      });
  }
}
