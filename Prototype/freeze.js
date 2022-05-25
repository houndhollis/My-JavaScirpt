// 동결! Object.freeze
const woong = {name:'영웅'};
const dog = {name:'꼬미', age:2, owner: woong};

Object.freeze(dog); //꽁꽁 얼리고 싶은것을 객체

dog.name = '멍멍';
console.log(dog) //{ name: '꼬미', age: 2, owner: 'woong' }
delete dog.name;
console.log(dog) //{ name: '꼬미', age: 2, owner: 'woong' } 

//동결된 객체는 새로운 프로퍼티 ,삭제,쓰기 다안된다 속성 재정의도 안됨!
// (단, 얕은 꽁꽁 얼림!)
woong.name = '김영웅'
console.log(dog) //{ name: '꼬미', age: 2, owner: { name: '김영웅' } }

// 밀봉! Object.seal
const cat = {};
Object.assign(cat, dog) // = const cat = {...dog}; 같다 
console.log(cat) //{ name: '꼬미', age: 2, owner: { name: '김영웅' } }

console.clear();
Object.seal(cat);
cat.name = '냐옹';
console.log(cat) //{ name: '냐옹', age: 2, owner: { name: '김영웅' } }
delete cat.age;
console.log(cat) //{ name: '냐옹', age: 2, owner: { name: '김영웅' } }
// seal 같은 경우 값의 수정만 가능, 추가,삭제,속성재정의 불가능

console.log(Object.isFrozen(dog)); // 꽁꽁 얼었는지
console.log(Object.isSealed(cat)); // 밀봉 되었는지

// 확장 금지 preventExtensions
const tiger = {name:'호랑이'};
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger)); // 확장이 가능한지 = false
tiger.name = '어흥';
console.log(tiger) //{ name: '어흥' }
delete tiger.name ;
console.log(tiger); // {}

// 확장만 안되기 때문에 추가만 안된다 나머지는 다가능 