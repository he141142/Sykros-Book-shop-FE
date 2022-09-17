export class HelperUtils {
    static reverseRandomArray = (arr: Array<any>, startIndex = 0, loopCount = 5): Array<any> => {
        let arrCpy = [...arr]
        if (loopCount === 0)
            return arr;
        let flag = HelperUtils.randomIntFromInterval(0, arr.length - 1);
        const temp = arrCpy[startIndex]
        arrCpy[startIndex] = arrCpy[flag];
        arrCpy[flag] = temp;
        flag = HelperUtils.randomIntFromInterval(0, arrCpy.length - 1);
        loopCount--;
        return HelperUtils.reverseRandomArray(arrCpy, flag, loopCount);
    }

    static randomIntFromInterval = (min: number, max: number) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    static SeedArray = (arr:Array<any>,count=3): Array<any> =>{
        let arrCpy = [...arr]
        let arrCpySeed = [...arr]
                for(let i =0;i<count;i++){
                    arrCpy = HelperUtils.reverseRandomArray(arrCpySeed);
                    arrCpy.push(...arrCpySeed)
                }
                console.log("arr999");
                console.log(arrCpy);
                return arrCpy;
    }

    static isLengthExceed = (str: string,maximumLengthAllowed=30):boolean =>{
        if(str.length>30){
            return true;
        }
        return false;
    }

    static getTextByMaximumLengthAllow = (str: string,maximumLengthAllowed=30) =>{
        if(HelperUtils.isLengthExceed(str,maximumLengthAllowed)){
            return str.slice(0,maximumLengthAllowed)
        }
        return str;
    }
}
