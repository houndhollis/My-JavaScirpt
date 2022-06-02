//선언 
let lang;
//할당
lang = 'Js'
//재할당
lang = 'JavaScript'
//선언과 동시
// let lang = 'JavaScript'

// 추천은 선언과 동시에 하는것이다.

// 복합 할당 연산자
let count = 0;
count = count + 1;
// count += 1 ; 같다 

//문자열 값(원시 값) 
let str = 'word'
str.toUpperCase();
console.log(str); //word

// undefined , Boolean, Number , Strign , null , Symbol
// typeof했을시
// undefined  boolean  number   string   object  

// 전부다 객체타입 !
const obj = {
    name : 'jang',
}

const arr = ['jang']

function func(){
    return 'jang'
}
// 타입오브시 object 가 나온다. 함수는 function;
