// 변수를 참초할 수 있는 유효한 범위
// 식별자가 유효한 범위
//식별자: 변수 함수 클래스 이름
//선언된 위치에 따라 유효 범위가 결정됨

// 블럭안의 변수는 블럭 안에서만 유효 
//코드블럭: { }, if(), for(),{}, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다
const b = 'b'
{ 
    const a ='a';
    console.log(a); // 'a'
    console.log(b)
}
// console.log(a) // 에러
//함수 외부에서는 함수 내부의 변수를 참조 없다
function print (){
    const message = 'Hello World';
    console.log(message);
}
// 함수 외부에서는 함수의 매개변수를 참조할수 없더ㅏ
function sum(a,b){
    console.log(a,b)
}

