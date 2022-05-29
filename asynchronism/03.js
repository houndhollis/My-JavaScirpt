function timer(time){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(time)
        },time)
    });
}
// console.log('start')
// timer(1000).then((time)=>{
//     console.log('time:',time)
//     return timer(time+1000);
// }).then((time)=>{
//     console.log('time:',time)
//     return timer(time+1000)
// }).then((time)=>{
//     console.log('time:',time)
//     console.log('end')
// })

async function run(){
console.log('start')
let time = await timer(1000)
console.log('time:',time);
time = await timer(time+1000);
console.log('time:',time);
time = await timer(time+1000);
console.log('time:',time);
console.log('end')
}
console.log('parent start')
run();
console.log('parent end')


