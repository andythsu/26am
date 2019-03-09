export class DateUtil {
  _date: Date;
  constructor(dateString) {
    this._date = new Date(dateString);
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
