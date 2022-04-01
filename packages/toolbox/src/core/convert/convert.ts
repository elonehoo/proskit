class convert {
  /**
   * convert to string
   * @param value the converted value
   * @param defaultValue Default value on conversion error
   * @returns string
   */
  public static toStr(value:any,defaultValue=null):string{
    return value === null ? defaultValue : value.toString();
  }


}

export default convert
