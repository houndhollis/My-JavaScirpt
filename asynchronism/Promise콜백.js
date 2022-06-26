// 콜백지옥을 해결할수 있는 프로미즈 객체 자바스크립트의 비동기를 돕는 객체

function isPositive(number,resolve,reject){
    setTimeout(()=>{
      if(typeof number === 'number'){
          resolve(number>=0?'양수':'음수')
          // 성공 -> resolver
      }else{
          // 실패 -> reject 
          reject('주어진 값이 숫자형 값이 아닙니다.')
      }
    },2000)
}
function isPositiveP(number){
    const executor = (resolve,reject)=>{
        setTimeout(()=>{
            if(typeof number === 'number'){
                resolve(number>=0?'양수':'음수')
                // 성공 -> resolver
            }else{
                // 실패 -> reject 
                reject('주어진 값이 숫자형 값이 아닙니다.')
            }
        },2000)
    }

   const asyncTask = new Promise(executor)
   return asyncTask
}
const res = isPositiveP([])
res.then((res)=>console.log('성공입니다 :',res))
.catch((err)=>console.log('실패:',err))

// 밑에는 프로미즈 사용안한 버전.
// isPositive([],(res)=>{
//     console.log('성공적으로 수행됨 :',res)
// },(err)=>{
//     console.log('실패하였음:',err)
// })