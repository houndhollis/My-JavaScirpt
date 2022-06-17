// await 는 프로미즈를 기다리위해 사용되는 async 에서만 사용가능

const Ediya = function(coffeName){
    return new Promise((resolve,reject)=>{
        if(coffeName ==='americano'){
            resolve('아메리카노 한잔입니다.')
        }else{
            reject('아메리카노는 없습니다.')
        }
    })
}

async function americano(some){
   try{
       const result = await Ediya(some)
       console.log(result)
   }
   catch(error){
       console.log(error)
   }
   finally{
       console.log('감사합니다.')
   }
}
americano('아메리')
// 프로미즈는 then 으로 계속해서 체인을 늘어트릴수 있는데
// 에싱크 어웨이트는 무조건 좋은건 아니지만 덴과비교해서 사용할수 있다.