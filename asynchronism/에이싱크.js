// 에이싱크
function delay (ms){
    return new Promise((resolve)=>{
        setTimeout(resolve,ms)
    })
}

async function helloAsync(){
  await delay(3000)
  return 'hello async'
} 
// 에이싱크를 붙이면 자동적으로 프로미즈를 반환하는 비동기함수가된다
helloAsync().then((res)=>{console.log(res)})


// console.log(helloAsync()) //Promise { 'hello Async' }

async function main(){
    const res = await helloAsync()
    console.log(res)
}
main()
