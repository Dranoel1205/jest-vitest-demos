import { assert, expect, test } from 'vitest'
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