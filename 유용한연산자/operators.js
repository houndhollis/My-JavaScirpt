// 논리연산자 
// && 그리고 
// || 또는
// 단축 평가; short-circuit evaluation



// if(obj1&&obj2){
    //     console.log('둘다 true!')
    // }
    // 조건문 밖에서 쓰면 평가
    // let result = obj1 && obj2
    // console.log(result)
    // result = obj1 || obj2;
    // console.log(result)
    
    //활용예
    // && 조건이트루일때, 무언가를 해야할때
    // || 조건이 폴시일때 무언가를 해야할때
    const obj1 = {name: 'dog'}
    const obj2 = {name: 'cat', owner:'woong'};
    
function changeOwner(animal){
    if(!animal.owner){
        throw new Error('주인이 없음!')
    }
    animal.owner = '바뀐주인'
}
function makeNewOnwer(animal){
    if(animal.owner){
        throw new Error('주인이 있어')
    }
    animal.owner = '새로운 주인!'
}

obj1.owner && changeOwner(obj1)
obj2.owner && changeOwner(obj2)
console.log(obj1);
console.log(obj2);
obj1.owner || makeNewOnwer(obj1)//폴스 실행
obj2.owner || makeNewOnwer(obj2)//트루 실행 x
console.log(obj1);
console.log(obj2);

// null 또는 undefined 를 확인할때
let item = {price : 1 };
const price = item && item.price;
console.log(price)