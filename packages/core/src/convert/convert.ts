class convert{
  /**
   * number convert to string
   * @param value value to convert
   * @returns string
   */
  static toString(value:number):string{
    return value.toString();
  }

  /**
   * number convert to boolean
   * @param value value to convert
   * @returns boolean
   */
  static toBoolean(value:number):boolean{
    return value === 0 ? false : true;
  }

  /**
   * array convert to string
   * @param value value to convert
   * @returns string
   */
  static arrayToString(value:any[]):string{
    return value.join(',');
  }
}

export default convert
