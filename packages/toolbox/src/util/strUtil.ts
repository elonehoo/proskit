import convert from '../core/convert/convert'

class strUtil{

  public static isBlankIfStr(value:any):boolean{
    return value === null ? true : convert.toStr(value) === '' ? true : false;
  }

}

export default strUtil
