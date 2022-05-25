const dog = {name:'와우',age: 26};

console.log(Object.keys(dog))
console.log(Object.values(dog))
console.log(Object.entries(dog))

console.log('name' in dog)
// 도그라는 객체안에 네임이라는 키가 있니?

console.log(dog.hasOwnProperty('name'))
// 둘다 같다.

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog)
console.log(des)
//{
//name: { value: '와우', writable: true, enumerable: true, configurable: true },
//age: { value: 26, writable: true, enumerable: true, configurable: true }
//}
const desc = Object.getOwnPropertyDescriptor(dog,'name')
console.log(desc)
//{ value: '와우', writable: true, enumerable: true, configurable: true }

Object.defineProperty(dog, 'name',{
    value: '멍멍',
    writable: false, 
    enumerable: false, // 열거 불가
    configurable:false, // 키 자체수정 불가 삭제도불가
})

console.log(dog.name) // 멍멍
console.log(Object.keys(dog)) //enumerable: false, 로 했기떄문에
// 'name 값은 안나온다;

