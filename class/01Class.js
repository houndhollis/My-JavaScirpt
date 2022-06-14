// 클래스는 프로토타입 기반으로 동작을 한다.

class Person {
    constructor(name,age){
      this.name = name;
      this.age = age;
    }
    getInfo(){
        return this.name + '가(이)' + this.age + '살을 먹었다'
    }
}
//붕어빵 틀이라고 생각해도 좋다.
// 인스턴스는 틀에서 찍어낸 붕어빵이다.

// 클래스 확장은 extends

class Friends extends Person{
  constructor(name,age){
      super (name,age)
  } 
}
const 영웅 = new Friends('웅',26);
console.log(영웅.getInfo()) // super 를 통해서 Person의 속성을 가져왔다.

console.log(영웅.constructor.name)//Friends