import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ListService } from "./list.service";

import { DateUtil } from "../class/index";

@Component({
  selector: "list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  constructor(public listService: ListService) {
    // gets upcoming events
    // this.listService.getUpcomingEvents().subscribe(items => {
    //   items = items.map(item => {
    //     return {
    //       ...item,
    //       fullDate: new DateUtil(item.dateTime).getFullDate()
    //     };
    //   });
    //   this.upcomingEvents = items;
    // });
    //gets old events
    // this.listService.getOldEvents().subscribe(items => {
    //   items = items.map(item => {
    //     return {
    //       ...item,
    //       fullDate: new DateUtil(item.dateTime).getFullDate()
    //     };
    //   });
    //   this.oldEvents = items;
    // });
  }

  ngOnInit() {}
}
