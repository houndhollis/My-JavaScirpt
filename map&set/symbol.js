// Symbol 심벌
// 유일한 키를 생성할 수 있음,
const map = new Map();
// const key1 = 'key';
// const key2 = 'key';
const key1 = Symbol('key')
const key2 = Symbol('key')
map.set(key1,'Hello');
console.log(map.get(key2))// HEllo // undefined
console.log(key1===key2)// true; // false;
//동일한 이름으로 하나의 키를 사용하고 싶다면 Symbol for
// 전역 심벌 레지스트리( Global Symbol Registry)
console.clear();
const k1 = Symbol.for('key')
const k2 = Symbol.for('key')
console.log(k1===k2) // true



