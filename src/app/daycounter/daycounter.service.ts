// @Injectable()
export class DaycounterService {
  private startTime: string;
  private days: string = "0";
  private hours: string = "0";
  private minutes: string = "0";
  private seconds: string = "0";

  getTimeElapsed(): void {
    var t = Date.parse(new Date().toString()) - Date.parse(this.startTime);
    this.days = Math.floor(t / (1000 * 60 * 60 * 24)).toString();
    this.hours = ("0" + Math.floor((t / (1000 * 60 * 60)) % 24)).slice(-2);
    this.minutes = ("0" + Math.floor((t / 1000 / 60) % 60)).slice(-2);
    this.seconds = ("0" + Math.floor((t / 1000) % 60)).slice(-2);
  }

  getTimeLeft(): void {
    var t = Date.parse(this.startTime) - Date.parse(new Date().toString());
    this.days = Math.floor(t / (1000 * 60 * 60 * 24)).toString();
    this.hours = ("0" + Math.floor((t / (1000 * 60 * 60)) % 24)).slice(-2);
    this.minutes = ("0" + Math.floor((t / 1000 / 60) % 60)).slice(-2);
    this.seconds = ("0" + Math.floor((t / 1000) % 60)).slice(-2);
  }

  initCounter(startTime) {
    this.startTime = startTime;
    let self = this;
    if (this.isTimeBigger(new Date(), this.startTime)) {
      self.getTimeElapsed();
      setInterval(() => {
        self.getTimeElapsed();
      }, 1000);
    } else {
      self.getTimeLeft();
      setInterval(() => {
        self.getTimeLeft();
      }, 1000);
    }
  }

  isTimeBigger(base, target) {
    return base - Date.parse(target.toString()) > 0;
  }

  // getters
  getDays() {
    return this.days;
  }

  getHours() {
    return this.hours;
  }

  getMinutes() {
    return this.minutes;
  }

  getSeconds() {
    return this.seconds;
  }
}
