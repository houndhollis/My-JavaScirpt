// function getBanana(){
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//            resolve('π') 
//         }, 1000);
//     })
// }

// function getApple(){
//     return new Promise((resolve)=>{
//          setTimeout(()=>{
//              resolve('π')
//          },3000)
//     })
// }

// function getOrange(){
//     return Promise.reject(new Error('no orange'))
// }

// //λ°λλλ μ¬κ³Όλ₯Ό κ°μ΄ κ°μ§κ³  μ€κΈ°
// async function fetchFruits(){
//     const banana = await getBanana();
//     const apple = await getApple();
//     return [banana,apple];

// }
// fetchFruits()
// .then((fruits)=>console.log(fruits))


//ν΄μ¦ 

function fetchEgg(chicken){
    return Promise.resolve(`${chicken} => π₯`)
}

function fryEgg(egg){
    return Promise.resolve(`${egg} => π³`)
}

function getChicken(){
    return Promise.resolve(`π  => π`)
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
