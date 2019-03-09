import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'list',
  providers: [ListService],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  bucketlist: any;

  constructor(private listService: ListService) { 
    this.listService.getBucketList().then((data: any) => {
      this.bucketlist = data;
    }).catch((error: any) => {
      console.log("error: ", error);
    });

  }

  ngOnInit() {
  }

}
