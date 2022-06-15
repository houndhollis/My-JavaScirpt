//
// 클로져 알기!
//

function returnx (x){
    let outerChar = x;

    return function returnx2(y){
        let innerChar = y;

        return outerChar + innerChar;
    }
}

const x = returnx('x')
const xy = x('y')
console.log(xy) //xy

function sum(num1){
    return function (num2){
        return num1 + num2
    };
}
const sum5 = sum(5) // 계속 바인딩 되어있는 상태이다.
console.log(sum5(10)) //15
console.log(sum5(20)) //25

const sum99 = (num6) => (num7) =>  num6 + num7;
const num11 = sum99(5)
console.log(num11(4)) //4 신기하다..

// 어휘적인 환경을 기억해놓고 캡쳐같은 느낌이다.