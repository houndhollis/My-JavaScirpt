 // 자바스크립트는 싱글쓰레드 방식 ! 일꾼을 한기이상으로 늘릴수가 없어서 비동기 작업을 하는것이다.

 function taskA(a,b,cb){
     setTimeout(()=>{
         const res = a+b
         cb(res)
     },5000)
 }

function taskB(a,cb){
    setTimeout(()=>{
        const res = a * 2
        cb(res)
    },1000)
}
function taskC(a,cb){
    setTimeout(()=>{
        const res = a * -1;
        cb(res)
    },2000)
}

//  taskA(3,4,(res)=>{console.log('a끝 결과값은:',res)})
//  console.log('누가먼저?') // 애가먼저 뜬다 이걸로 봐서는 비동기라는것!
//  taskB(7,(res)=>{console.log('b끝 !:',res)})
//  taskC(14,(res)=>{console.log('C끝 결과값은:',res)})
 
// b - c - a 순으로 나온다! 
//
// 힙:메모리 할당, 콜스택:code 실행 !

taskA(4,5,(a_res)=>{
    console.log('A result:',a_res)
    taskB(a_res,(b_res)=>{
        console.log('B result:',b_res)
        taskC(b_res,(c_res)=>{
            console.log('C result:',c_res)
        })
    })
})

// 이렇게 이어지다보면 동기로 처리 하며, 콜백지옥에 빠지게된다..!

// 그렇게 해서 나온 것이 바로 Promise 이다.
