// function getBanana(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//            resolve('🍌') 
//         }, 1000);
//     })
// }

// function getApple(){
//     return new Promise((resolve)=>{
//          setTimeout(()=>{
//              resolve('🍎')
//          },3000)
//     })
// }

// function getOrange(){
//     return Promise.reject(new Error('no orange'))
// }

// //바나나랑 사과를 같이 가지고 오기
// async function fetchFruits(){
//     const banana = await getBanana();
//     const apple = await getApple();
//     return [banana,apple];

// }
// fetchFruits()
// .then((fruits)=>console.log(fruits))


//퀴즈 

function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => 🥚`)
}

function fryEgg(egg){
    return Promise.resolve(`${egg} => 🍳`)
}

function getChicken(){
    return Promise.resolve(`🍠 => 🐓`)
}

async function makeFriedEgg(){
    let chicken;
    try{
        chicken = await getChicken()
    } catch{
        chicken = 'chicken'
    }
    const egg = await fetchEgg(chicken);
    return fryEgg(egg)
} 
makeFriedEgg().then(console.log)
