// Spread 연산자, 전개구문
// 모든 Interable 은 Spread 될 수 있다
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐 질 수 있다
// func(...iterable) //함수
// [...iterable] //배열
// {...obj} // 객체
// EcmaScript 2018



// function add(a,b,c){
//     return a+b+c;
// }
// const nums = [1,2,3];
// console.log(add(...nums)) // 6

//Rest parameters 
const arr1 = [1,2,3]; 
const arr2 = [4,5,6];
const arr = [...arr1,'안뇽',...arr2];
console.log(arr)

// //Object 
// const ellie = {name:'Ellie',age:26, home:{addres:'home'}}
// const updated = {
//     ...ellie,
//     job:'s/w engineer'
// }
// console.log(updated)


// 구조분해 할당 Desturcturing Assignment 
// 데이터 뭉치(그룹화) 를 쉽게 만들수 있다

const fruits = ['apple','banana','remon','kiwi']
const [first , second , ...others] = fruits;
console.log(first) //apple
console.log(second) // banana
console.log(others) // ['remon','kiwi']
const point = [1,2,8]; 
const [x,y,z=0] = point ;
console.log(x); //1
console.log(y); //2
console.log(z)

// function createEmoji(){
//     return ['apple','🍎'];
// }
// const [title,emoji] = createEmoji()
// console.log(title)
// console.log(emoji)

// const ellie = {name:'Ellie',age:26, job:'s/w engineer'};
// function display({name,age,job}){
//     console.log('이름', name);
//     console.log('나이', age);
//     console.log('직업', job);
// }
// display(ellie)

// const {name,age, job: occupation ,pet = '강아지'} = ellie;
// console.log(name)
// console.log(age)
// console.log(occupation)
// console.log(pet)

//퀴즈

const prop = {
    name: 'button',
    styles: {
        size:20,
        color:'black',
    },
};

function changeColor({name, styles:{size,color}}){
    console.log(color)
    console.log(name)
    console.log(size)
}
changeColor(prop)

