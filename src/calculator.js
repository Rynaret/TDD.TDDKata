export class Calculator{

    add(str){
        let regex = /\/\/(.*)\n/;
        let regResult = str.match(regex);

        if(regResult){
            str = str.replace(regResult[0],'');
            str = str.replace(regResult[1],',');
        }

        str = str.replace('\n',',');

        let numbers = str.split(',');

        return numbers.reduce((x,y) => +x + +y);
    }
}