const one = Promise.resolve('1')
const two = (seconds) => new Promise((resolve)=>{
    setTimeout(()=>{
        resolve('2')
    },seconds)
}) // 동기적으로 실행된다.
const three = Promise.resolve('3')

one.then((res)=>{
    console.log(res)
    return two(3000) // 윗쪽 에서 seconds 를 인자에 넣어줌으로써 딜레이를 추가한다.
})
.then((two)=>{
    console.log(two)
    return three
}) 
.then((el)=>{
    console.log(el)
}) //1,2,3

const Ediya = function(coffeName){
    return new Promise((resolve,reject)=>{
        if(coffeName ==='americano'){
            resolve('아메리카노 한잔입니다.')
        }else{
            reject('으악 이게뭐야?')
        }
    })
}

Ediya('americano')
.then((res)=>console.log(res)).catch((rej)=>console.log(rej))
.finally(()=>console.log('감사합니다.'))