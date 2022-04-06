class strUtil{

    /**
     * Check if a string is empty
     * @param str judged string
     * @returns boolean
     */
    static isEmpty(str:string):boolean{
        return str === null || str === undefined || str === '';
    }

    /**
     * Check if a string is not empty or null
     * @param str judged string
     * @returns boolean
     */
    static isNotEmpty(str:string):boolean{
        return !strUtil.isEmpty(str);
    }

    /**
     * Check if a string is blank
     * @param str judged string
     * @returns boolean
     */
    static isBlank(str:string):boolean{
        return strUtil.isEmpty(str) || str.trim() === '';
    }
    static isNotBlank(str:string):boolean{
        return !strUtil.isBlank(str);
    }
    static isNull(str:string):boolean{
        return str === null;
    }
    static isNotNull(str:string):boolean{
        return !strUtil.isNull(str);
    }
    static isUndefined(str:string):boolean{
        return str === undefined;
    }
    static isNotUndefined(str:string):boolean{
        return !strUtil.isUndefined(str);
    }
    static isEmptyOrBlank(str:string):boolean{
        return strUtil.isEmpty(str) || str.trim() === '';
    }
    static isNotEmptyOrBlank(str:string):boolean{
        return !strUtil.isEmptyOrBlank(str);
    }
    static isEmptyOrNull(str:string):boolean{
        return strUtil.isEmpty(str) || str === null;
    }
    static isNotEmptyOrNull(str:string):boolean{
        return !strUtil.isEmptyOrNull(str);
    }
    static isEmptyOrUndefined(str:string):boolean{
        return strUtil.isEmpty(str) || str === undefined;
    }
    static isNotEmptyOrUndefined(str:string):boolean{
        return !strUtil.isEmptyOrUndefined(str);
    }
    static isBlankOrNull(str:string):boolean{
        return strUtil.isBlank(str) || str === null;
    }
    static isNotBlankOrNull(str:string):boolean{
        return !strUtil.isBlankOrNull(str);
    }
    static isBlankOrUndefined(str:string):boolean{
        return strUtil.isBlank(str) || str === undefined;
    }
    static isNotBlankOrUndefined(str:string):boolean{
        return !strUtil.isBlankOrUndefined(str);
    }
}

export default strUtil
