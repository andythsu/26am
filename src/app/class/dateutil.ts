export class DateUtil {
  _date: Date;
  constructor(dateString) {
    const dateTimeInGMT = new Date(dateString);
    this._date = new Date(dateTimeInGMT.toUTCString() + "-04:00");
  }

  getFullDate(): any {
    let year = this._date.getFullYear();
    let month = (this._date.getMonth() + 1).toString();
    let date = this._date.getDate().toString();
    month = month.length >= 2 ? month : "0" + month;
    date = date.length >= 2 ? date : "0" + date;
    return year + "-" + month + "-" + date;
  }
}
