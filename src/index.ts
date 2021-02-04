let hello : string = 'hello ts'


document.querySelectorAll('.app')[0].innerHTML = 'hello';


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
  a: number,
  b: number,
  c: number
}

type pick = Pick<obj, 'a'>

type readonly = Readonly<obj>

type record = Record<'d', obj>






