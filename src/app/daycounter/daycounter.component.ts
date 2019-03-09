import { Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';

import {DaycounterService} from './DayCounter.service';

@Component({
  selector: 'day-counter',
  providers: [DaycounterService],
  templateUrl: './daycounter.component.html',
  styleUrls: ['./daycounter.component.scss']
})
export class DayCounterComponent implements OnInit, OnChanges{

  @Input('startTime') 
  public startTime: string;
  @Input('showDays')
  public showDays: boolean = false;
  @Input('showHours')
  public showHours: boolean = false;
  @Input('showMinutes')
  public showMinutes: boolean = false;
  @Input('showSeconds')
  public showSeconds: boolean = false;

  constructor(public dayCounter: DaycounterService) {
  }

  ngOnInit(){
    this.dayCounter.initCounter(this.startTime);
  }

  //detect any changes
  ngOnChanges(changes: SimpleChanges){
  }

}
