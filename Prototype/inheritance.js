// 프로토 타입을 베이스로한 객체지향 프로그래밍

function Animal(name,emoji){
    this.name = name
    this.emoji = emoji
}

Animal.prototype.pirntName = function(){
    console.log(`${this.name} ${this.emoji}`)
};

function Dog(name,emoji,owner){
    // super(name,emoji)로 연결 하지만 call 스태틱사용 
    Animal.call(this, name,emoji)
    this.owner = owner
}
Dog.prototype = Object.create(Animal.prototype) //애니멀꺼 상속
Dog.prototype.play = () =>{
    console.log('같이 놀아요!')
};

const dog1 = new Dog('멍멍','👋','woong')
console.log(dog1)


function Tiger(name,emoji){
    Animal.call(this,name,emoji)
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () =>{
    console.log('사냥하자')
}

const tiger1 = new Tiger('타이거','🤯')
console.log(tiger1)
console.log(tiger1.hunt())
console.log(tiger1.pirntName())