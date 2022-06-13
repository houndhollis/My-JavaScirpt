// 자바스크립트는 프로토타입의 기반언어이다.

// constructor (생성자)

function User(name,age){
    this.name = name;
    this.age = age;
}
const user1 = new User('woong',26)
const user2 = new User('jongsu',26)

console.log(user1) // User { name: 'woong', age: 26 }

console.log(user1.constructor.name) // User
console.log(user2.constructor.name) // User
console.clear()

const obj = {};
const arr = [];
const func = function (){};
const str = new String('str')

console.log(obj.constructor.name) // Object
console.log(arr.constructor.name) // Array
console.log(func.constructor.name) // Function
console.log(str.constructor.name) // String

console.log(obj instanceof Object) // true
console.log(arr instanceof Array) // true
console.log(func instanceof Function) // true
console.log(str instanceof String) // true
// 프로토 타입에 접근해서도 사용가능 !


