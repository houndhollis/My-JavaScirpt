// 클로져란 내부함수에서 외부함수에 있는 상태를 접근할수 있는 권한을 주는것을
// 말하는 거랑 같다.!


function outer(){
    const y = 1;
    function inner(){
      y;
    }
    inner()
}
outer() // 1

// 이너 스코프는 아웃터 스코프를 찾는다

function outer(){
    const x = 2;
    function inner(){
        x;
    }
    return inner
}

const inner = outer()
inner()

const str = 'woong';
function func(){
    console.log(str)
}
func();

function outer(){
    const x = 0;
    function inner(){
        console.log(`inside inner:${x}`)
    }
    return inner
}
const func1 = outer()
func1()
