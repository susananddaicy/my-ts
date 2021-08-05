var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
    companyId: 1,
};
// TypeScript 函数
// 箭头函数
var fun = function () { };
// 函数类型
var IdGenerator;
function createUserId(num, str) {
    return num + str;
}
IdGenerator = createUserId;
// 下边是实现
function add(arg1, arg2) {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 arg1 + arg2
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
        return arg1 + arg2;
    }
    else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
        return arg1 + arg2;
    }
}
// TypeScript 数组
// 数组遍历
var colors = [1, 2, 3];
for (var _i = 0, colors_1 = colors; _i < colors_1.length; _i++) {
    var c = colors_1[_i];
    console.log('color', c);
}
// TypeScript 对象
// 对象展开运算符
var man = {
    age: 12,
    name: 'dog'
};
var age = man.age, rest = __rest(man, ["age"]);
console.log('rest', rest);
var myPerson = {
    name: '123',
    age: 12,
    address: 'shanghai'
};
// myPerson.name = '23';
var ro = [1, 2];
// ro[0] = 1;
// TypeScript 类
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    // 静态方法
    Greeter.getClassName = function () {
        return "Class name is Greeter";
    };
    // 成员方法
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    // 静态属性
    Greeter.cname = 'daa';
    return Greeter;
}());
// 访问器
var Employee = /** @class */ (function () {
    function Employee() {
        this._fullName = '';
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            console.log('getter: ' + this._fullName);
            return this._fullName;
        },
        set: function (newName) {
            this._fullName = newName;
            console.log('setter: ' + newName);
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Semlinker";
if (employee.fullName) {
    console.log(employee.fullName);
}
// 泛型变量
// typeof
function toArray(x) {
    return [x];
}
typeof toArray;
var value1 = 'name';
var value2 = 'age';
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo1 = {
    title: "organize desk",
    description: "clear clutter",
};
var todo2 = updateTodo(todo1, {
    description: "throw out trash",
});
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
