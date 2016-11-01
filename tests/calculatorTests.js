import assert from 'assert'
import {Calculator} from '../src/calculator'

// Create a simple String calculator with a method int Add(string numbers)
// The method can take 0, 1 or 2 numbers,
// and will return their sum (for an empty string it will return 0) for example “” or “1” or “1,2”
suite('When type ""', ()=>{
    test('then calculator returns 0', ()=>{
        let calculator = new Calculator();
        let enterStr = "";

        let result = calculator.add(enterStr);

        assert.equal(0, result);
    });
});
suite('When type "3"', ()=>{
    test('then calculator returns 3', ()=>{
        let calculator = new Calculator();
        let enterStr = "3";

        let result = calculator.add(enterStr);

        assert.equal(3, result);
    });
});
suite('When type "3,5"', ()=>{
    test('then calculator returns sum of 3 + 5', ()=>{
        let calculator = new Calculator();
        let enterStr = "3,5";

        let result = calculator.add(enterStr);

        assert.equal(3 + 5, result);
    });
});
// Allow the Add method to handle an unknown amount of numbers
suite('When type "3,5,7,-8,9"', ()=>{
    test('then calculator returns sum of 3 + 5 + 7 + -8 + 9', ()=>{
        let calculator = new Calculator();
        let enterStr = "3,5,7,-8,9";

        let result = calculator.add(enterStr);

        assert.equal(3 + 5 + 7 + -8 + 9, result);
    });
});
// Allow the Add method to handle new lines between numbers (instead of commas).
// the following input is ok:  “1\n2,3”  (will equal 6)
suite('When type "1\\n2,3"', ()=>{
    test('then calculator returns sum of 1 + 2 + 3', ()=>{
        let calculator = new Calculator();
        let enterStr = "1\n2,3";

        let result = calculator.add(enterStr);

        assert.equal(1 + 2 + 3, result);
    });
});
// Support different delimiters
// to change a delimiter, the beginning of the string will contain a separate line that looks
// like this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2”
// should return three where the default delimiter is ‘;’
suite('When type "//;\\n1;2"', ()=>{
    test('then calculator returns sum of 1 + 2', ()=>{
        let calculator = new Calculator();
        let enterStr = "//;\n1;2";

        let result = calculator.add(enterStr);

        assert.equal(1 + 2, result);
    });
});


















