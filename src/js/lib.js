export const pi = Math.PI;  // ES6 모듈

export function power(x, y) {
  return x ** y;  // ES7 연산자
}

// ES6 클래스
export class Foo {
  #private = 10;

  foo() {
    const {a, b, ...x} = {...{z:1, b:2}, c:3, d:4};
    return {a, b, x};
  }
  bar() {
    return this.#private;
  }
}