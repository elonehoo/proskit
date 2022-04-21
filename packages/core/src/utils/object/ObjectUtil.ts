class ObjectUtil{

  /**
   * Is a given variable an object?
   * @param value value to check
   * @returns boolean
   */
  static isObject(value:any):boolean{
    const type = typeof value;
    return type === 'function' || type === 'object' && !!value;
  }
}

export default ObjectUtil;
