//
// __Proto__ (던더프로토)
//
//비표준.. ! 이며 더이상 사용하지 않길 바라며 
// Object.getPrototypeOf,Reflect.getPrototypeOf 
// Object.setPrototypeOf , Reflect.setPrototypeOf 를 권장한다.
const obj = {}
console.log(Object.getPrototypeOf(obj)) // 던더프로토 처럼 접근가능

//
//프로토 타입 체인
{
    const a = '밖'
    {
     const b ='안'
     console.log(a) //밖
    }
    // console.log(b) //에러
}
console.clear()

let array = []
array.push(10)

console.log(array.hasOwnProperty(0))// 쓸수있는이유
array instanceof Object //true 이기 때문이다.

console.clear
const animal = {
    sayName() {
      return 'ANIMAL'
    }
}
console.log(animal.sayName())//ANIMAL
const dog1 = Object.create(animal)
console.log(dog1.sayName()) //ANIMAL
// 아무것도 존재하지 않지만 체이닝이 되어서 dog1 에서 sayName 이 가능하다.
// array.
// array 에 . 을 찍었을 경우 많은 함수를 쓸수 있는이유가 체이닝되었기 때문이다.
