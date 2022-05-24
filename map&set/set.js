// Set 은 비교적 간단
const set = new Set([1,2,3]);

console.log(set)
//사이즈 확인
console.log(set.size)//3
// 존재하는지 확인
console.log(set.has(2))//true

//순회 
set.forEach(item => console.log(item))/1,2,3

for(const value of set.values()){
    console.log(value)// 1.2.3
}

//추가 
set.add(6);
console.log(set)//1,2,3,6
set.add(6);
console.log(set)//1,2,3,6
//중복 불가

//삭제
set.delete(6)
console.log(set)//1,2,3

//전부다 삭제
set.clear();
console.log(set)// 0
// 오브젝트 세트
console.clear();
const obj1 = {name:'apple',price:8}
const obj2 = {name:'banana',price:5}
const objs = new Set([obj1,obj2])
console.log(objs) //Set(2) { { name: 'apple', price: 8 }, { name: 'banana', price: 5 } }
console.log(objs.size)//2
obj1.price = 10;
objs.add(obj1) // 쉘로우 카피
console.log(objs)

// 퀴즈
const obj3 = {name:'banana',price:5};
objs.add(obj3)
console.log(objs);


