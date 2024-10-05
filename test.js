const { fromEuroToDollar } = require('./app.js');
const { fromDollarToYen } = require('./app.js');
const { fromYenToPound } = require('./app.js');

let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87
}

test("One euro should be 1.07 dollars", () => {
    const expectedValue = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(expectedValue);
})

test("One dollar should be 146.26 yen", () => {
    const expectedValue = 3.5 * 146.26;
    expect(fromDollarToYen(3.5)).toBe(expectedValue);
})

test("One yen should be 0.0056 pounds", () => {
    const expectedValue = 3.5 / 179.89;
    expect(fromYenToPound(3.5)).toBe(expectedValue);
})