import assert from 'assert'
import {Calculator} from '../src/calculator'

// Create a simple String calculator with a method int Add(string numbers)
// The method can take 0, 1 or 2 numbers, and will return their sum
// (for an empty string it will return 0) for example “” or “1” or “1,2”
suite('When enter "" to calculator', ()=> {
    test('then calculator returns 0', ()=> {
        let calculator = new Calculator();
        const enterStr = "";

        let result = calculator.add(enterStr);

        assert.equal(0, result);
    });
});
suite('When enter "3" to calculator', ()=> {
    test('then calculator returns 3', ()=> {
        let calculator = new Calculator();
        const enterStr = "3";

        let result = calculator.add(enterStr);

        assert.equal(3, result);
    });
});
suite('When enter "-7,3" to calculator', ()=> {
    test('then calculator returns sum of -7 + 3', ()=> {
        let calculator = new Calculator();
        const enterStr = "-7,3";

        let result = calculator.add(enterStr);

        assert.equal(-7 + 3, result);
    });
});
// Allow the Add method to handle an unknown amount of numbers
suite('When enter "-7,3,6,7,44" to calculator', ()=> {
    test('then calculator returns sum of -7 + 3 + 6 + 7 + 44', ()=> {
        let calculator = new Calculator();
        const enterStr = "-7,3,6,7,44";

        let result = calculator.add(enterStr);

        assert.equal(-7 + 3 + 6 + 7 + 44, result);
    });
});
// Allow the Add method to handle new lines between numbers (instead of commas).
// the following input is ok:  “1\n2,3”  (will equal 6)
suite('When enter "1\\n2,3" to calculator', ()=> {
    test('then calculator returns sum of 1 + 2 + 3', ()=> {
        let calculator = new Calculator();
        const enterStr = "1\n2,3";

        let result = calculator.add(enterStr);

        assert.equal(1 + 2 + 3, result);
    });
});
// Support different delimiters
// to change a delimiter, the beginning of the string
// will contain a separate line
// that looks like this:   “//[delimiter]\n[numbers…]” for example “//;\n1;2”
// should return three where the default delimiter is ‘;’ .
suite('When enter "//;\\n1;2" to calculator', ()=> {
    test('then calculator returns sum of 1 + 2', ()=> {
        let calculator = new Calculator();
        const enterStr = "//;\n1;2";

        let result = calculator.add(enterStr);

        assert.equal(1 + 2, result);
    });
});
// Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2
suite('When enter "2,1001" to calculator', ()=> {
    test('then calculator returns 2', ()=> {
        let calculator = new Calculator();
        const enterStr = "2,1001";

        let result = calculator.add(enterStr);

        assert.equal(2, result);
    });
});
// Delimiters can be of any length with the following format:
// “//[delimiter]\n” for example: “//[***]\n1***2***3” should return 6
suite('When enter "//[***]\\n1***2***3" to calculator', ()=> {
    test('then calculator returns 1 + 2 + 3', ()=> {
        let calculator = new Calculator();
        const enterStr = "//[***]\n1***2***3";

        let result = calculator.add(enterStr);

        assert.equal(1 + 2 + 3, result);
    });
});








