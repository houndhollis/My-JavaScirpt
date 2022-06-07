
const me = {
    name:'woong',
    age:26,
    location:'korea',
};
 
const me1 = {
    name:'woong',
    age:26,
    location:'korea',
};



console.log(me === me1)//false
// me 가저장된 메모리주소 me1이 저장된곳이 다르기 때문이다.

// 생성자

function Person(name,age,location){
    this.name = name;
    this.age = age;
    this.location = location;

    this.getName = function ( ){
        return this.name+'입니다'
    }
}
const me2 = new Person('woong',20,'korea')
