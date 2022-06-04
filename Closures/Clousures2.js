// 내부 정보를 은닉하고 , 공개 함수를 통한 데이터 조작을 위해 사용한다.
// 캡슐화 와 정보은닉을 위해 쓰인다
function makeCounter(){
    let count = 0;
    function increase(){
        count++;
        console.log(count)
    }
    return increase
}

const increase = makeCounter();
increase() //1
increase() //2
increase() //3

class Counter {
    #count = 0;
    increase(){
        this.#count ++
        console.log(this.#count)
    }
}
const counter = new Counter()
counter.increase()