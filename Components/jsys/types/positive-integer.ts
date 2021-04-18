class PositiveInteger {
  private integer;

  constructor(integer) {
    if (!new RegExp('^[0-9]\\d*$').test(integer)) {
      throw 'Not a valid positive integer';
    }
    this.integer = integer;
  }

  value() {
    return this.integer;
  }
}
export default PositiveInteger;
