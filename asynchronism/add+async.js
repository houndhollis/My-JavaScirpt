async function example(){
    return 20;
}
example().then((item)=>{
    console.log(item)
}) //20

const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(10)
    },2000)
})

async function promiseChaing(){
    let data = await promise
    console.log(data)
    data = data + 10;
    console.log(data)
    data = data + 10;
    console.log(data)
    data = data + 10;
    console.log('끝!',data)
}

promiseChaing();

async function example1(){
    return 20
}

(async ()=>{
    let data = await example()
    console.log('1',data)
})();
// async 함수가 그냥 리턴을 하면 프로미즈의 리졸브랑 같다.
new Promise( (resolve, reject) => { resolve(20) } )
