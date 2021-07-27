document.querySelectorAll('.app')[0].innerHTML = 'hello';

let hello: string = 'hello ts'
let flag: boolean = false;
let num: number = 1; 
let _obj: object = {};
let list: number[] = [1, 2, 3];
let list2: Array<number> = [2, 3];
let list3: string[] = ['2'];
let list4: boolean[] = [true, false];
let symbol: Symbol = Symbol('foo');

// Enum 类型
// 数字枚举相对字符串枚举多了 “反向映射”
// 数字枚举
enum Direction {
  NORTH,
  SOUTH
};
const dir: Direction = Direction.NORTH;

// 字符串枚举
enum Direction {
  EAST = "EAST",
  WEST = "WEST",
}
// 异构枚举 异构枚举的成员值是数字和字符串的混合
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}

// any 类型
let notSure: any = 1;

// unknown 类型
let value: unknown;

// tuple 元组类型
let tupleType: [string, number] = ['1', 1];

// void 类型
function test(): void {
  console.log('void 类型');
}
let unusable: void = undefined;

// undefined类型
let u: undefined = undefined;

// null类型
let n: null = null;

// Never 类型
function infiniteLoop(): never {
  while(true) {}
}
function error(message: string): never {
  throw new Error(message);
}

// 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码
type Foo = string | number;
function controlFlowAnalysisWithNever(foo: Foo) {
  if (typeof foo === "string") {
    // 这里 foo 被收窄为 string 类型
  } else if (typeof foo === "number") {
    // 这里 foo 被收窄为 number 类型
  } else {
    // foo 在这里是 never
    const check: never = foo;
  }
}

// TypeScript 断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 类型守护 类型保护允许你使用更小范围下的对象类型
// typeof instanceof in
function doSome(x: number | string) {
  if (typeof x === 'string') {
    // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
    // console.log(x.subtr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
    console.log(x.substr(1)); // ok
  }
  // x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}


// 联合类型
const say = (name: string | undefined | null) => {
}
say("Semlinker");
say(undefined);

// 类型别名
// 类型别名用来给一个类型起个新名字。
type Message = string | string[];
let greet = function(message: Message) {
}
greet('1');
greet(['1']);


// 交叉类型
// TypeScript 交叉类型是将多个类型合并为一个类型
interface IPerson {
  name: string;
  age: number;
}
interface IWorker {
  companyId: number;
}
type Person = IPerson & IWorker;
const person: Person = {
  name: 'daichunyu',
  age: 20,
  companyId: 1,
}



















let obj = {
  a: 1,
  b: 2,
  c: 3
}

function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key])
}

console.log(getValues(obj, ['a']));
console.log(getValues(obj, ['b']));

interface obj {
  a: number;
  b: number;
  c: number;
  d: number;
}

type pick = Pick<obj, 'a'>

type readonly = Readonly<obj>

type record = Record<'e', obj>






