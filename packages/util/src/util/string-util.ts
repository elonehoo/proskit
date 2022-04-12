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

    /**
     * Check if string is not empty
     * @param str judged string
     * @returns boolean
     */
    static isNotBlank(str:string):boolean{
        return !strUtil.isBlank(str);
    }

    /**
     * Check if a string is null
     * @param str judged string
     * @returns boolean
     */
    static isNull(str:string):boolean{
        return str === null;
    }

    /**
     * Check if a string is null
     * @param str judged string
     * @returns boolean
     */
    static isNotNull(str:string):boolean{
        return !strUtil.isNull(str);
    }

    /**
     * Check if a string is undefined
     * @param str judged string
     * @returns boolean
     */
    static isUndefined(str:string):boolean{
        return str === undefined;
    }

    /**
     * Check if a string is not undefined
     * @param str judged string
     * @returns boolean
     */
    static isNotUndefined(str:string):boolean{
        return !strUtil.isUndefined(str);
    }

    /**
     * Check if a string is empty or blank
     * @param str judged string
     * @returns boolean
     */
    static isEmptyOrBlank(str:string):boolean{
        return strUtil.isEmpty(str) || str.trim() === '';
    }

    /**
     * Check if a string is not empty or blank
     * @param str judged string
     * @returns boolean
     */
    static isNotEmptyOrBlank(str:string):boolean{
        return !strUtil.isEmptyOrBlank(str);
    }

    /**
     * Check if a string is null or empty
     * @param str judged string
     * @returns boolean
     */
    static isEmptyOrNull(str:string):boolean{
        return strUtil.isEmpty(str) || str === null;
    }

    /**
     * Check if a string is not null or empty
     * @param str judged string
     * @returns boolean
     */
    static isNotEmptyOrNull(str:string):boolean{
        return !strUtil.isEmptyOrNull(str);
    }

    /**
     * Check if a string is empty or undefined
     * @param str judged string
     * @returns boolean
     */
    static isEmptyOrUndefined(str:string):boolean{
        return strUtil.isEmpty(str) || str === undefined;
    }

    /**
     * Check if a string is not empty or undefined
     * @param str judged string
     * @returns boolean
     */
    static isNotEmptyOrUndefined(str:string):boolean{
        return !strUtil.isEmptyOrUndefined(str);
    }

    /**
     * Check if a string is null or blank
     * @param str judged string
     * @returns boolean
     */
    static isBlankOrNull(str:string):boolean{
        return strUtil.isBlank(str) || str === null;
    }

    /**
     * Check if a string is not null or blank
     * @param str judged string
     * @returns
     */
    static isNotBlankOrNull(str:string):boolean{
        return !strUtil.isBlankOrNull(str);
    }

    /**
     * check if a string is blank or undefined
     * @param str judged string
     * @returns boolean
     */
    static isBlankOrUndefined(str:string):boolean{
        return strUtil.isBlank(str) || str === undefined;
    }

    /**
     * check if a string is not blank or undefined
     * @param str judged string
     * @returns boolean
     */
    static isNotBlankOrUndefined(str:string):boolean{
        return !strUtil.isBlankOrUndefined(str);
    }
}

export default strUtil
