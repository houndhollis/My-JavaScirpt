function taskA (a,b){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const res = a+b
            resolve(res)
        },3000)
    })

}
function taskB (a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const res = a*2
            resolve(res)
        },1000)
    })
   
}
function taskC (a){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const res = a* -1
            resolve(res)
        },2000)
    })
}

// taskA(3,4,(a_res)=>{
//     console.log('task A',a_res)
//     taskB(a_res,(b_res)=>{
//         console.log('task B',b_res);
//         taskC(b_res,(c_res)=>{
//             console.log('task C',c_res)
//         })
//     })
// }) // 이제이 콜백지옥을 프로미즈로 해결해보기

taskA(5,1)
.then((res)=>{
    console.log('A성공',res);
    return taskB(res)
})
.then((res)=>{
    console.log('B성공',res);
    return taskC(res)
})
.then((res)=>{
    console.log('C성공',res)
})
