// 콜백 - 나중에 실행하는 코드,함수
// 함수에 파라미터로 들어가는 함수
// 함수를 다른함수의 인자로 넘길수도 있고 , 리턴값을 함수로 ,변수를 함수로
// 이래서 1급객체이다. 
// 용도 : 순차적으로 실행하고 싶을 때

first(second)  // 선언식이라 호이스팅이 일어난다.

function first(파라미터){
   파라미터()
}

function second(){
  console.log('안녕')
}

// 프로미즈를 쓰는이유
// 페치가 성공했는지 실패했는지 표준화된 정의로 알려줌
// 성공하면 then 으로 저장된 함수가 실행 
 
// const job1 = new Promise(function(resolve,reject){
//       setTimeout(function(){
//         resolve('resolved ok!')
//       },2000)
//    })
// job1.then(function(data){
//     console.log('data',data)
// });

// 위아래 같은 함수 

function job1(){
    return new Promise(function(resolve,reject){
          setTimeout(function(){
            resolve('job1 ok!')
          },2000)
       })
    }
function job2(){
    return new Promise(function(resolve,reject){
            setTimeout(function(){
            resolve('job2 ok!')
            },2000)
        })
    }
    
    // job1().then(function(data){
    //     console.log('data1',data)
    //     job2().then((data)=>{console.log('data2',data)})
    // }); // 네이스틱 방식 보다 체이닝 방식을 선호 

    job1()
    .then(function(data){
        console.log('data1',data)
        return job2();
    })
    .then(function(data){
        console.log('data2',data)
    })
// 아래는 체이닝 방식이다 

