export class DateComparison {
    private startDate;
    private endDate;
    constructor(startDate, endDate) {
      if (startDate > endDate) {
        throw 'start date cannot be greater than end date';
      }
    }
}
