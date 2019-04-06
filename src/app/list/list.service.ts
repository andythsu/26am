import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { DateUtil } from "../class";

@Injectable({
  providedIn: "root"
})
export class ListService {
  upcomingEvents: any;
  constructor(private httpClient: HttpClient) {
    this.getUpcomingEvents().subscribe(items => {
      items = items.map(item => {
        return {
          ...item,
          fullDate: new DateUtil(item.dateTime).getFullDate()
        };
      });
      this.upcomingEvents = items;
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
        datetime: "2019-04-29T12:00:00"
      }
    ];
  }

  addToList(name, date, time) {
    return new Promise((resolve, reject) => {
      this.httpClient
        .post<any>(environment.server + environment.event, { name, date, time })
        .subscribe(data => {
          const fullDate = new DateUtil(data.dateTime).getFullDate();
          data.fullDate = fullDate;
          this.upcomingEvents.push(data);
          console.log(this.upcomingEvents);
          resolve();
        });
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
