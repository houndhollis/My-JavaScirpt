// 이터레이션은 반복 순회 라는 말이다 

//이터레이션 프로토콜 반복순회/ 규격약속 인터페이스 
// for ... of / spread 
// Array , String , Map , Set

// Iterable 프로토콜 

// Iterable 하다는건 ! 순회가 가능하다는 거지!
// [Symnbol.iterator](): Iterator
// 심볼 정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for..of,spread
const array = [1,2,3];
for(const item of array){
    console.log(item)
}

const obj = {0:1 , 1:2};
for(const item in obj){ //key 를 출력
    console.log(obj[item])
}
console.clear()
const iterator = array.values();
console.log(iterator)
// for(const item of iterator){
//     console.log(item)
// } // 123
// console.log(iterator.next().value)//value 는 값이고
// console.log(iterator.next())// done 은 끝났냐 안끝났냐
// console.log(iterator.next())
// console.log(iterator.next())
//1
//{ value: 2, done: false }
//{ value: 3, done: false }

while(true){
    const item = iterator.next();
    if(item.done) break;
    console.log(item.value)
}



