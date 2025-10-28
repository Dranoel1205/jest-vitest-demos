import { Calculator } from "./calculator";

const calc = new Calculator;

console.log(`2 + 3 = ${calc.add(2, 3)}`);       // 2 + 3 = 5
console.log(`10 - 4 = ${calc.subtract(10, 4)}`); // 10 - 4 = 6
console.log(`3 * 7 = ${calc.multiply(3, 7)}`);   // 3 * 7 = 21
console.log(`10 / 2 = ${calc.divide(10, 2)}`); // 10 / 2 = 5

try {
  console.log(calc.divide(5, 0));
} catch (error) {
  console.error("Division by zero is not allowed.");
}