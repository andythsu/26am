import { Injectable } from '@angular/core';
import { DaycounterModule } from "./daycounter.module";


@Injectable()
export class DaycounterService {
  
  private startTime: string;
  private days;
  private hours;
  private minutes;
  private seconds;
  
  getTimeElapsed(): void {
    var t = Date.parse(new Date().toString()) - Date.parse(this.startTime);
    this.days = Math.floor(t / (1000 * 60 * 60 * 24));
    this.hours = ('0' + Math.floor((t / (1000 * 60 * 60)) % 24)).slice(-2);
    this.minutes = ('0' + Math.floor((t / 1000 / 60) % 60)).slice(-2);
    this.seconds = ('0' + Math.floor((t / 1000) % 60)).slice(-2);
  }

  getTimeLeft(): void {
    var t = Date.parse(this.startTime) - Date.parse(new Date().toString());
    this.days = Math.floor(t / (1000 * 60 * 60 * 24));
    this.hours = ('0' + Math.floor((t / (1000 * 60 * 60)) % 24)).slice(-2);
    this.minutes = ('0' + Math.floor((t / 1000 / 60) % 60)).slice(-2);
    this.seconds = ('0' + Math.floor((t / 1000) % 60)).slice(-2);
  }
  
  initCounter(startTime){
    this.startTime = startTime;
    var self = this;
    if(this.isTimeBigger(new Date(), startTime)){
      var timeInterval = setInterval(function(){
        self.getTimeElapsed();
      }, 1000);
    }else{
      var timeInterval = setInterval(function(){
        self.getTimeLeft();
      }, 1000);
    }
  }

  isTimeBigger(base, target){
    return (Date.parse(new Date().toString()) - Date.parse(target.toString()) > 0);
  }


  
  // getters
  getDays(){
    return this.days;
  }
  
  getHours(){
    return this.hours;
  }
  
  getMinutes(){
    return this.minutes;
  }
  
  getSeconds(){
    return this.seconds;
  }
  
}
