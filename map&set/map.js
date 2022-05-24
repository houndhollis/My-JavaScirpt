//맵은 [키,값] 키는 유일 값은 중복가능
const map = new Map([
    ['key1','apple'],
    ['key2','banana'] // {key1:'apple'}
]);
console.log(map)

// 사이즈확인
console.log(map.size)
// 존재하는지 확인
console.log(map.has('key1'))//키값으로 true
console.log(map.has('key6'))// false
// 순회
map.forEach((value,key)=>console.log(key,value))
console.log(map.keys())
console.log(map.values())
console.log(map.entries())
// 찾기
console.log(map.get('key1'))//apple
console.log(map.get('key4'))//undefined
// 추가
map.set('key3','kiwi')
console.log(map)
// 삭제
map.delete('key3')
console.log(map)
// 전부삭제
map.clear()
console.log(map)

//오브젝트와의 큰 차이점
const key ={name:'milk',price:10};
const milk ={name:'milk',price:10,description:'맛있는우유'};
const obj ={
    [key]:milk,
}
console.log(obj)
const map2 = new Map([[key,milk]])
console.log(map2)
console.log(obj[key])
console.log(map2[key]);
console.log(map2.get(key))

console.clear();
console.clear();
console.clear()
const fruits = ['banana','apple','grape','banana','apple','peach']

function twoDelet(array){
    return [...new Set(array)];
}
console.log(twoDelet(fruits))

//퀴즈2
console.clear();
const set1 = new Set([1,2,3,4,5]);
const set2 = new Set([1,2,3]);

function kongTong(set1, set2){
    const array = [...set1].filter((item)=>set2.has(item));
    return new Set(array);
}

console.log(kongTong(set1,set2))


