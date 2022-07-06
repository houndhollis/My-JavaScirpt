const { add } = require("nodemon/lib/rules")

// 객체 복합데이터 객체는 힙이라는 메모리 공간에있고 식별자는 고 공간을 가르킨다
let user ={
    name: 'woong',
    age: 26,
    hobby: 'cook'
}
console.log(user.name) // woong
// 객체는 서로 연관있는 속성과 행동을 묶어주기 위해.
// 속성 -  프로퍼티  / 행동 - 메소드

// 객체 만드는 방법!
// Object literal {key:value} 가장 많이 쓰이는 방법!
// new Object()
// Object.create() 
// key(문자,숫자,문자열,심볼) , value(원시값,객체(함수)) 등이 가능하다

let banana  ={
    name: 'woong',
    'hello-bye':'👋 ',
    0: 1 ,
    ['hello-bye']:'👋 ',
}
console.log(banana["hello-bye"])
// - 가 있으면 대괄호 표기법을 쓴다.
// 속성,데이터에 접근 하기위해서는 객체 이름.속성

// 속성 추가방법
banana.emoji = '📏' 
console.log(banana) //{ '0': 1, name: 'woong', 'hello-bye': '👋 ', emoji: '📏' }

// 속성 삭제
delete banana.emoji
console.log(banana) //{ '0': 1, name: 'woong', 'hello-bye': '👋 ' }


const obj = {
    name:'영웅',
    age:20,
}
// 코딩하는 시점에 정적으로 접근이 확정
obj.name;
obj.age;

// 동적으로 속성에 접근하고 싶을때는 대괄호
function value(obj,key){
    return obj[key]
}
console.log(value(obj,'name')) // 영웅 

function addObj(obj,key,value){
      obj[key]=value
}
addObj(obj,'job','egineer') //{ name: '영웅', age: 20, job: 'egineer' }
console.log(obj) // 딜리트도 똑같이 함수를 만들어서 해도 좋다 

const x = 0;
const y = 0;
const coordinate = {x:x,y:y}
const coordinate1 = {x,y}
console.log(coordinate1)//{ x: 0, y: 0 }
console.log(coordinate) //{ x: 0, y: 0 }

// 객체 안 함수!
const apple = {
    name:'apple',
    display: function(){
        console.log(this.name)// 자기자신 부를때는 this
    }
}
console.log(apple.display()) // apple 
