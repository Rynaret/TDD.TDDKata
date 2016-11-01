export class Calculator{
    get divider(){return ',';}
    get replacableDivider(){return '\n';}

    constructor() {
    }

    calculate(numbers){
        if(numbers.length > 1){
            return numbers.reduce((x,y) => +x + +y);
        }

        if(numbers[0]){
            return +numbers[0];
        }
        return 0;
    }

    parseInput(str){
        str = str.replace(this.replacableDivider, this.divider);

        return str.split(this.divider);
    }

    add(str){
        let numbers = this.parseInput(str);

        return this.calculate(numbers);
    }
}
