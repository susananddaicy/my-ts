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

// TypeScript 函数
// 箭头函数
const fun = () => {};

// 函数类型
let IdGenerator: (num: number, str: string) => string;

function createUserId(num: number, str: string): string {
  return num + str;
}

IdGenerator = createUserId;

// 可选参数 剩余参数

// 函数重载
// TypeScript 中的函数重载也只是多个函数的声明，具体的逻辑还需要自己去写
// 上边是声明
function add (arg1: string, arg2: string): string
function add (arg1: number, arg2: number): number

// 下边是实现
function add (arg1: string | number, arg2: string | number) {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
  if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return arg1 + arg2
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return arg1 + arg2
  }
}


// TypeScript 数组
// 数组遍历
let colors: number[] = [1, 2, 3];

for(let c of colors) {
  console.log('color', c)
}

// TypeScript 对象
// 对象展开运算符
let man: { age: number; name: string } = {
  age: 12,
  name: 'dog'
};
const { age, ...rest } = man;
console.log('rest', rest)


// TypeScript 接口
// 对象的类型---------接口
interface IIPerson {
  readonly name: string;
  age?: number;
  [propName: string]: any // 希望一个接口允许有任意的属性, 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
}

const myPerson: IIPerson = {
  name: '123',
  age: 12,
  address: 'shanghai',
}
// myPerson.name = '23';






let ro: ReadonlyArray<number> = [1, 2];
// ro[0] = 1;

// TypeScript 类
class Greeter {
  // 静态属性
  static cname: string = 'daa';
  // 成员属性
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  // 静态方法
  static getClassName() {
    return "Class name is Greeter";
  }

  // 成员方法
  greet() {
    return "Hello, " + this.greeting;
  }

}

// 访问器
class Employee {
  private _fullName: string = '';

  get fullName(): string {
    console.log('getter: ' + this._fullName);
    return this._fullName;
  }

  set fullName(newName: string) {
    this._fullName = newName;
    console.log('setter: ' + newName);
  }
}

let employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
  console.log(employee.fullName);
}



// 类的继承
// extends 

// TypeScript 泛型

// 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T
}


// 泛型变量
// typeof
function toArray(x: number): Array<number> {
  return [x];
}
typeof toArray

// keyof
interface KPerson {
  name: string;
  age: number;
}
type key = keyof KPerson;
let value1: key = 'name'
let value2: key = 'age'

// in
type keys = 'a' | 'b' | 'c';
type obj2 = {
  [p in keys] : any
}

// partial
type partial<T> = {
  [p in keyof T]?: T[p];
}
interface Todo {
  title: string;
  description: string;
}
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});



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









