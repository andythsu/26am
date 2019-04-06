import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { DateUtil } from "../class";

@Injectable()
export class ListService {
  constructor(private httpClient: HttpClient) {
    this.getUpcomingEvents().subscribe(items => {
      items = items.map(item => {
        return {
          ...item,
          fullDate: new DateUtil(item.dateTime).getFullDate()
        };
      });
    });
    this.getOldEvents().subscribe(items => {
      items = items.map(item => {
        return {
          ...item,
          fullDate: new DateUtil(item.dateTime).getFullDate()
        };
      });
    });
  }

  getDummyData() {
    return [
      {
        name: "Montreal",
        datetime: "2019-04-29T12:00:00",
        done: false
      }
    ];
  }

  addToList(name, date, time) {
    this.httpClient
      .post<any>(environment.server + environment.event, { name, date, time })
      .subscribe(data => {
        console.log(data);
      });
  }

  getUpcomingEvents() {
    return this.httpClient.get<any>(
      environment.server + environment.event + "/upcoming"
    );
  }

  getOldEvents() {
    return this.httpClient.get<any>(
      environment.server + environment.event + "/old"
    );
  }
}
