// 프로토 타입 확장(extends , 상속)
//
// super class 

function Animal(name, sound){
    this.name = name;
    this.sound = sound;
}

Animal.prototype.getInfo = function (){
    return this.name + '가(이)' + this.sound + '를 낸다'
}

function Friends(name , sound){
    Animal.call(this,name,sound);
}

Friends.prototype = Object.create(Animal.prototype)

const dog = new Friends('개','멍멍')
const cat = new Friends('고양이','냐옹')

console.log(dog.getInfo()) // 확장을 해줘서 호출가능


