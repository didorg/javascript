// for number type
function funNum(arg: number): number {
  return arg;
}
// for string type
function funStr(arg: string): string {
  return arg;
}

// Generic function type-safe
function fun<T>(arg: T): T {
  return arg;
}
let resultStr = fun<string>("Hello World");
console.log(resultStr);
let resultNum = fun<number>(5);
console.log(resultNum);

// Generics with Parameters of Many Types
function funMultParams<T, U, V>(argT: T, argU: U, argV: V): V {
  return argV;
}
let resultMultParams = funMultParams<string, number, boolean>('hey', 3, false);
console.log(resultMultParams);
