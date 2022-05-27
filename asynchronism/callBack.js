// function execute(){
//     console.log('1')
//     setTimeout(()=>{
//     console.log('2');
//     },3000)
//     console.log('3');
// }
// execute();
// 1,3,2



// function runInDelay(callback,seconds){
//     if(seconds < 0){
//         throw new Error('초는 0보다 커야합니다.')
//     }
//    setTimeout(callback,seconds*1000);
// }
// runInDelay(()=>{
//     console.log('타이머완료')
// },20)


// 끝난 이벤트를 알려주는 Promise //콜백지옥 해결
// function runInDelay(seconds){
//   return new Promise((resolve,reject)=>{
//       if(!seconds || seconds <0){
//           reject(new Error('seconds 가 0보다 작음'))
//       }
//         setTimeout(resolve,seconds*1000)
//   });  
// }

// runInDelay(2)
// .then(()=>console.log('타이머 완료'))
// .catch(console.error) /// 생략가능
// .finally(()=>console.log('끝났다'));//생략가능

// .then(필요한일을 수행)
// .catch(에러를 처리)
// .finally(최종적으로 무조건 호출!)

// function fetchEgg(chicken){
//     return Promise.resolve(`${chicken} => 🥚`)
// }

// function fryEgg(egg){
//     return Promise.resolve(`${egg} => 🍳`)
// }

// function getChicken(){
//     return Promise.resolve(`🍠 => 🐓`)
// }

// // fetchEgg('🐔')
// // .then((egg)=>console.log(egg))
// getChicken()
// .then((chicken)=>fetchEgg(chicken))
// .then((egg)=>fryEgg(egg))
// .then((fryEgg) => console.log(fryEgg))

function getBanana(){
    return new Promise((resolve)=>{
        setTimeout(() => {
           resolve('🍌') 
        }, 1000);
    })
}

function getApple(){
    return new Promise((resolve)=>{
         setTimeout(()=>{
             resolve('🍎')
         },3000)
    })
}

function getOrange(){
    return Promise.reject(new Error('no orange'))
}

//바나나랑 사과를 같이 가지고 오기
getBanana()
  .then((banana)=>
    getApple()
      .then((apple) => [banana,apple])
  ).then(console.log);

  //promise.all 병렬적으로 한번에 모든 promise 들을 실행 
  Promise.all([getBanana(),getApple()])
  .then((fruits)=>console.log('all',fruits));

  //Promise.race 주어진 Promise 중에 제일 빨리 수행된것이 이김
  Promise.race([getBanana(),getApple()])
  .then(fruits => console.log('race',fruits))