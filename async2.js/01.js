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
