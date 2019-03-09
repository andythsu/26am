import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ListService } from "./list.service";

import { DateUtil } from "../class/index";

@Component({
  selector: "list",
  providers: [ListService],
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {
  bucketlist: any;
  constructor(private listService: ListService) {
    this.listService
      .getBucketList()
      .then((data: any) => {
        this.bucketlist = data.map(list => {
          return {
            ...list,
            date: new DateUtil(list.datetime).getFullDate()
          };
        });
      })
      .catch((error: any) => {
        console.log("error: ", error);
      });
  }

  ngOnInit() {}
}
