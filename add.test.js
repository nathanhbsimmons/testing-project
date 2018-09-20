
const add=(var1)=>{
    const var2 = 1
    return var1 + var2
}

describe('add function', function() {
    test('Should add positive number and var2 together and return the result', function() {
        expect(add(2)).toBe(3);
    });

    test('Should add negative number and var2 together and return the result', function() {
        expect(add(-3)).toBe(-2);
    });

    test('Should add 1 positive and 1 negative numbers together and return the result', function() {
        expect(add(-1,2)).toBe(1);
    });

    test('Should add 0 and var2 together and return the result', function() {
        expect(add(0)).toBe(1);
    });

    test('Should add 0 and var2 together and return the result', function() {
        expect(add(0)).toBe(1);
    });

    test('Should throw an error if var1 is not a number', function() {
        expect(() => add("0")).toThrowError('Argument must be a number');
    });
    test('Should throw an error if no parameter is passed in', function() {
        expect(() => add()).toThrowError('Function must be passed a parameter when called');
    });
});