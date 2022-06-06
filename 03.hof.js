const fruits = ['딸기','바나나','사과']
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}
// 배열을 빙글빙글 돌면서 원하는 것을 할때
fruits.forEach(function(item){
    console.log(item)
})
// 위에랑 아래랑 같음!
fruits.forEach((item)=>console.log(item))

// 조건에 맞는 (콜백함수) 아이템을 찾을때 

const item1 = { name:'🥛 ',price:2};
const item2 = { name:'🍪 ',price:3};
const item3 = { name:'🍙 ',price:1};
const products = [item1,item2, item3, item2];
let result = products.find((value) => { return value.name === '🍪 '; });
console.log(result)
//find : 제일먼저 조건에 맞는 아이템을 반환

//findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환 
result = products.findIndex((value) => { return value.name === '🍪 '; });
console.log(result)

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍪 ');
console.log(result)

//배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪 ');
console.log(result)

//조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === '🍪 ');
console.log(result)
console.clear();

//Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열생성!

const nums = [1,2,3,4,5];
result = nums.map(item => item*2);
console.log(result)

result = nums.map(item => {
    if(item%2===0){
        return item*2
    }else{
        return item
    }
});
console.log(result)

// Flatmap: 중
result = nums.map(item => [1,2]);
console.log(result)

result = nums.flatMap(item => [1,2]);
console.log(result)

result = ['dream','coding'].flatMap(text => text.split(''))
console.log(result)

//sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi','abc'];
texts.sort();
console.log(texts);

const number = [0,5,4,2,1,10];
number.sort();
console.log(number) // 원하는것은 숫자 제대로

number.sort((a,b) => a-b);// a-b 면 정순 반대면 역순
console.log(number)

//reduce 배열의 값을 접어서 접어서 값을 하나로
result = [1,2,3,4,5].reduce((sum,value)=>(sum += value), 0);
console.log(result)         //값저장 인자 sum 1~5 는 밸류  0은 sum 의 초기화값


// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === '🍪 ');
console.log(result)

//배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === '🍪 ');
console.log(result)

const arr = [1,2,3,4,5];
arrSome = arr.some((item)=>{
   return item % 2 === 0
})
arrEvery = arr.every((item)=>{
    return item % 2 === 0
})
console.log(arrSome) // true
console.log(arrEvery)// false