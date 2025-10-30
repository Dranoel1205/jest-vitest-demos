import { Calculator } from "./calculator";

const calc = new Calculator;

test('Addition of two numbers', () => {
    expect(calc.add(1,2)).toBe(3)
})
test('Subtraction of two numbers', () => {
    expect(calc.subtract(5,2)).toBe(3)
})
test('Multiplication of two numbers', () => {
    expect(calc. multiply(2,2)).toBe(4)
})
test('Division of two numbers', () => {
    expect(calc.divide(10,2)).toBe(5)
})
test('Division-by-zero check', () => {
    expect(() => calc.divide(7,0)).toThrow()
})
test('Modulo of two numbers', () => {
    expect(calc.modulo(7,2)).toBe(1)
})
test('Modulo-by-zero check', () => {
    expect(() => calc.modulo(7,0)).toThrow()
})

// Testen der Report-Funktion
describe('Generate report snapshot', () => {
    let calculator: Calculator

    it('Compare currently generated report with snapshot', () => {
        const report = calc.generateReport(10, 5);
        expect(report).toMatchSnapshot();
    });

    it('Compare currently generated report (with div by zero) with snapshot', () => {
        const report = calc.generateReport(10, 0);
        expect(report).toMatchSnapshot();
    });
})