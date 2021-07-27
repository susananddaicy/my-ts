document.querySelectorAll('.app')[0].innerHTML = 'hello';
var hello = 'hello ts';
var flag = false;
var num = 1;
var _obj = {};
var list = [1, 2, 3];
var list2 = [2, 3];
var list3 = ['2'];
var list4 = [true, false];
var symbol = Symbol('foo');
// Enum 类型
// 数字枚举相对字符串枚举多了 “反向映射”
// 数字枚举
var Direction;
(function (Direction) {
    Direction[Direction["NORTH"] = 0] = "NORTH";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
})(Direction || (Direction = {}));
;
var dir = Direction.NORTH;
// 字符串枚举
(function (Direction) {
    Direction["EAST"] = "EAST";
    Direction["WEST"] = "WEST";
})(Direction || (Direction = {}));
// 异构枚举 异构枚举的成员值是数字和字符串的混合
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
// any 类型
var notSure = 1;
// unknown 类型
var value;
// tuple 元组类型
var tupleType = ['1', 1];
// void 类型
function test() {
    console.log('void 类型');
}
var unusable = undefined;
// undefined类型
var u = undefined;
// null类型
var n = null;
// Never 类型
function infiniteLoop() {
    while (true) { }
}
function error(message) {
    throw new Error(message);
}
function controlFlowAnalysisWithNever(foo) {
    if (typeof foo === "string") {
        // 这里 foo 被收窄为 string 类型
    }
    else if (typeof foo === "number") {
        // 这里 foo 被收窄为 number 类型
    }
    else {
        // foo 在这里是 never
        var check = foo;
    }
}
// TypeScript 断言
var someValue = "this is a string";
var strLength = someValue.length;
// 类型守护 类型保护允许你使用更小范围下的对象类型
// typeof instanceof in
function doSome(x) {
    if (typeof x === 'string') {
        // 在这个块中，TypeScript 知道 `x` 的类型必须是 `string`
        // console.log(x.subtr(1)); // Error: 'subtr' 方法并没有存在于 `string` 上
        console.log(x.substr(1)); // ok
    }
    // x.substr(1); // Error: 无法保证 `x` 是 `string` 类型
}
// 联合类型
var say = function (name) {
};
say("Semlinker");
say(undefined);
var greet = function (message) {
};
greet('1');
greet(['1']);
var person = {
    name: 'daichunyu',
    age: 20,
    companyId: 1
};
var obj = {
    a: 1,
    b: 2,
    c: 3
};
function getValues(obj, keys) {
    return keys.map(function (key) { return obj[key]; });
}
console.log(getValues(obj, ['a']));
console.log(getValues(obj, ['b']));
