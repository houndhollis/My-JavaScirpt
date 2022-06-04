//객체 생성

const object = {
    property : 'value',
    method: function(){},
} //객체 리터럴 방법

console.log(object)

// 생성자 함수로 만드는법
// 파스칼 케이스 라고한다. 시작이 대문자
function NewObject(name){
    this.name = name ;
}

const newObj = new NewObject('woong')
console.log(newObj) //NewObject { name: 'woong' }
// 다른 방법
console.clear()
const newObject2 = Object.create(Object.prototype,
    {
    name:{
            value :'woong',
            writable: true, // 덮어쓸 수 있는지
            enumerable: true, // 열거할 수 있는지;
            configurable: true, // 객체 서술자를 수정할수 있는지
        },
    },
);//프로토타입,객체서술자(기술자)
newObject2.name = 'kim'; // 덮어쓸수있다 writable:false 로 하면 콘솔찍었을때 그대로 'woong' 이출력
console.log(newObject2)