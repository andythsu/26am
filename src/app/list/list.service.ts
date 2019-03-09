import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";

@Injectable()
export class ListService {
  constructor(private http: HttpClient) {}

  getDummyData() {
    return [
      {
        name: "Montreal",
        datetime: "2019-04-29T12:00:00",
        done: false
      }
    ];
  }

  getBucketList() {
    const url = "";
    const self = this;
    return new Promise((resolve, reject) => {
      // this.http.get(url).subscribe((data: any) => {
      //     resolve(data);
      // },(error: any) => {
      //     reject(error);
      // });
      resolve(self.getDummyData());
    });
  }
}
