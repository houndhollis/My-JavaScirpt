function timer(second,parameter){
    setTimeout(()=>{
        parameter()
    },second)
}

// timer(3000,()=>{console.log('이 작업')})


// timer(1000,()=>{
//     console.log('작업')
//     timer(1000,()=>{
//         console.log('작업')
//         timer(1000,()=>{
//             console.log('작업')
//         })
//     })
// }) 
// 위에는 비동기 밑에는 프로미즈

// timer(1000)
// .then(()=>{
//     console.log('작업') 
//     return timer(1000)
// })
// .then(()=>{
//     console.log('작업')
//     return timer(1000)
// })
// .then(()=>{
//     console.log('작업')
// })

// async function run(){
//     await timer(1000)
//     console.log('작업2')
//     await timer(1000)
//     console.log('작업2')
// }
// run()