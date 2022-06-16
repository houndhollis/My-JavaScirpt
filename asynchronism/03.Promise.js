// Promise 는 다음중 하나의 상태를 가진다
// pending   대기 - 대기
// fulfilled 이행 - 성공
// reject    거부 - 실패

const res = require("express/lib/response")

const pormise1 = new Promise ((resolve,reject)=>{
    resolve('Success!')
})
pormise1.then((value)=>{
    console.log(value)
}) // Success! 성공은 덴 체이닝으로 이어진다.

const promiseResolve = Promise.resolve('성공')
const promiseReject = Promise.reject('실패')

promiseResolve
.then((resolve)=>{
    console.log('1회'+resolve);
    return promiseReject // 1회 성고웋 실패하는것을 볼수있다.
})
.catch((reject)=>{
    console.log('2회때 실패 =>'+ reject); //실패했을 경우 캐치를 통해서 잡아줄수있다.
    return promiseResolve
})
.then((resolve)=>{
    console.log('3회'+resolve);
    return promiseResolve
})

// Promise 는 return 이 있어야 이어진다.


