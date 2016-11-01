import assert from 'assert'
import { Calculator } from '../src/calculator'
//The method can take 0, 1 or 2 numbers, and will
// return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
suite('When input is empty string', ()=>{
    test('then calculator returns 0', ()=> {
        const inputString = '';
        let calculator = new Calculator();

        let calculatorResult = calculator.add(inputString);

        assert.equal(0, calculatorResult);
    });
});
suite('When input is "1"', ()=>{
    test('then calculator returns 1', ()=> {
        const inputString = '1';
        let calculator = new Calculator();

        let calculatorResult = calculator.add(inputString);

        assert.equal(1, calculatorResult);
    });
});
suite('When input is "1,2"', ()=>{
    test('then calculator returns 1 + 2', ()=> {
        const inputString = '1,2';
        let calculator = new Calculator();

        let calculatorResult = calculator.add(inputString);

        assert.equal(1 + 2, calculatorResult);
    });
});
// Allow the Add method to handle an unknown amount of numbers
suite('When input is "1,2,4,5"', ()=>{
    test('then calculator returns 1 + 2 + 4 + 5', ()=> {
        const inputString = '1,2,4,5';
        let calculator = new Calculator();

        let calculatorResult = calculator.add(inputString);

        assert.equal(1 + 2 + 4 + 5, calculatorResult);
    });
});
// Allow the Add method to handle new lines between numbers (instead of commas).
// the following input is ok:  “1\n2,3”  (will equal 6)
// the following input is NOT ok:  “1,\n” (not need to prove it - just clarifying)
suite('When input is "1\\n2,3"', ()=>{
    test('then calculator returns 1 + 2 + 3', ()=> {
        const inputString = '1\n2,3';
        let calculator = new Calculator();

        let calculatorResult = calculator.add(inputString);

        assert.equal(1 + 2 + 3, calculatorResult);
    });
});
// Support different delimiters
// to change a delimiter, the beginning of the string will contain
// a separate line that looks like
// this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2” should
// return three where the default delimiter is ‘;’ .
// the first line is optional. all existing scenarios should still be supported