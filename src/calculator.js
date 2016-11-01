export class Calculator{

    get divider(){return ','};
    get maxAvailableValue(){return 1000};

    checkNumbers(numbers){
        let newNumbers = [];
        numbers.forEach((item)=>{
           if(+item <= this.maxAvailableValue){
               newNumbers.push(+item);
           }
        });
        return newNumbers;
    }

    add(str){
        const regEx = /\/\/\[?(.*)]?\n/;
        let regExResult = str.match(regEx);

        if(regExResult){
            str = str.replace(regExResult[0], '');
            let newDivider = regExResult[1].replace(']','');
            str = str.split(newDivider).join(this.divider)
        }

        str = str.replace('\n', this.divider);

        let numbers = str.split(this.divider);

        numbers = this.checkNumbers(numbers);

        return numbers.reduce((x,y)=> x + y);
    }
}