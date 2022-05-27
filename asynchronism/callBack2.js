// function seconds(n){
//     if(n<0){
//         throw new Error('초는 0보다 작을수 없어요 !')
//     }
//     setTimeout(()=>{
//       console.log('다됐다!')  
//     },n*1000)
// }
// seconds(-1)

/// 문제 여기서는 프로미즈 !
// 프로미즈는 두가지인자를 전달받는다
function runInDelay(seconds){
    return new Promise((resolve,reject)=>{
        if(!seconds || seconds <0){
            reject(new Error('초가 0보다 작음'))
        }
        setTimeout(resolve,seconds * 1000)
    });
}
runInDelay()
// .then(필요한일을 수행)
// .catch(에러를 처리)
// .finally(최종적으로 무조건 호출)'

// .then(()=>{
//     console.log('타이머 완료!')
// })
.then(()=> console.log('타이머 완료 !'))
// .catch(error => console.error(error))
.catch(console.error)
.finally(()=> console.log('끝났다'))



