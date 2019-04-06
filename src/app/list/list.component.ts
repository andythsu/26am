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
  constructor(public listService: ListService) {}

  ngOnInit() {}
}
