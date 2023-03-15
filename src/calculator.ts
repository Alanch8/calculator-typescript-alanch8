export class Calculator {
  public add(a: number, b: number) {
    return a + b;
  }

  public subs(a: number, b: number) {
    return a - b;
  }

  public multiply(a: number, b: number) {
    return a * b;
  }

  public div(a: number, b: number) {
    if (a !== 0) {
      return a / b;
    } else {
      throw new Error('Math error');
    }
  }
}
