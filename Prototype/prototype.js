// const dog1 = {name : '뭉치' , age: 25};
// const dog2 = {name : '코코' , age: 22};

function Dog(name,age){
    this.name = name;
    this.age = age;
// 인슨턴스 래벨의 함수 
    // this.printName = () =>{
    //     console.log(`${this.name} ${this.age}`)
    // }
}

// 프로토 타입 레벨의 함수
Dog.prototype.printName = function(){
    console.log(`${this.name} ${this.age}`)
}

const dog1 = new Dog('뭉치',25);
const dog2 = new Dog('코코',22);
console.log(dog1) // Dog { name: '뭉치', age: 25 }
console.log(dog2) // Dog { name: '코코', age: 22 }

dog1.printName(); // 뭉치 25

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면(오버라이딩하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다(새도잉 됨)

dog1.printName = function(){
    console.log('안녕')
}
dog1.printName() // 안녕

//정적 레벨
Dog.hello = () =>{
    console.log('Hello!')
}
// dog1.hello(); //에러
Dog.hello(); // Hello;
Dog.MAX_AGE = 20;
console.log(Dog)