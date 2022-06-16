[1,2,3].filter(function(el){
    console.log(el) // 1,2,3
})

// console.log('시작 ===') // 1순위

// setTimeout(()=>{
//     console.log('Set Timout') // 3순위
// },1000)

// console.log('종료') //2순위

// 이것을 본래의 순서에 맞게 변화를 시켜보자!

console.log('1')  

function setTimeoutCallBack(callback){
    setTimeout(()=>{
        console.log('2')
        callback() 
    },1000)
}

setTimeoutCallBack(()=>{
    console.log('3')
})

// 그러면 출력이 1,2,3 으로 맞게 떨어지는것을 볼수있다.!

// 콜백헬 이라는 것을 볼수 있다 에러가 생겼을때 고치기 힘들기때문에 그렇게해서 나온것이
// Promise 이다.