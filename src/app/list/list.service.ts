import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class ListService {
    
    constructor(private http: HttpClient) { }

    getDummyData(){
        return [
            {
                "name": "Hamilton",
                "date": "2019-01-04",
                "datetime": "2019-01-04T12:00:00",
                "done": true
            },
            {
                "name" : "Ski",
                "date" : "2019-01-18",
                "datetime": "2019-01-18T08:00:00",
                "done": false
            }
        ]    
    }

    getBucketList(){
        let url = '';
        let self = this;
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


