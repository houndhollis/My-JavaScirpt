// Promise 3 가지 상태
// 1. Pending (대기)
// 2. Fullfill (이행)
// 3. Rejected (실패)


setTimeout(()=>{
    console.log('a')
},1000)
/// 비동기 콜백 콜백은 비동기가 아니다

function calculator(callback,a,b){
    return callback(a,b);
}

console.log(calculator(function(x,y){return x + y}, 3 , 5)) 

const promise =  new Promise((resolve , reject)=>{
    setTimeout(()=>{
        resolve();
    },2000)
})

promise.then(()=>{
    console.log('b')
})


// Promise -> async/await
// promise.allSettled([.....]).then((results)=>{
   // 실패한 것만 필터링 해서 다시시도 
//}).catch((error)=>{})
