export class Calculator {
  add(a: number, b: number): number {
    return a + b;
  };
  subtract(a: number, b: number): number {
    return a - b;
  };
  multiply(a: number, b: number): number {
    return a * b;
  };
  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  };
  modulo(a: number, b: number): number {
    if (b === 0) {
      throw new Error("'Modulo-0' is not allowed");
    }
    return a % b;
  };

  // Report-Objekt zur Demonstration der Snapshot-Funktionalität
  generateReport(a: number, b: number): object {
    const report = {
      inputs: { a, b },
      operations: {
        addition: this.add(a, b),
        subtraction: this.subtract(a, b),
        multiplication: this.multiply(a, b),
        division: null as number | string | null,
      },
    };

    try {
      report.operations.division = this.divide(a, b);
    } catch (error) {
      if (error instanceof Error) {
        report.operations.division = error.message;
      }
    }
    return report;
  }
}