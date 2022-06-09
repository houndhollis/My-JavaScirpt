// 글로벌 컨텍스트의 this
// - 브라우져;
// 노드: 모듈을 가리킨다

const x = 0;
module.exports.x=x;
console.log(this) //{ x: 0 }

// console.log(globalThis)
// globalThis.setTimeout()
// setTimout() 글로벌 생략가능

// 함수 내부에서의 this

function fun(){
    console.log(this)
}
fun() // globalThis 가 출력 글로벌 객체접근 

// 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가르킨다.

function Dog(name){
    this.name = name;
    this.dogName = function(){
        console.log(this.name)
    }
}
const dog1 = new Dog('꼬미')
dog1.dogName()