//카운터를 만들기
// 0 이상의 값으로 초기화 한뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기

// class Counter{
//     constructor(counter){
//         this.counter = 0;
//     }
//     countUp(){
//         return this.counter++
//     }
//     countDown(){
//         return this.counter--
//     }
        
    
// }


// const counter = new Counter();
// counter.countUp();
// counter.countUp();
// counter.countDown();
// counter.countDown();
// console.log(counter)

// 클래스와 상속 연습 퀴즈!
//정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어 보자
//직원들의 정보:이름,부서이름,한달근무시간
//매달 직원들의 정보를 이용해서 한달월급을 계산할수 있다
//정직원 시급 10000;
//파트타임 8000;


class PullTimeEmployee {
    constructor(name,department){
        this.name = name;
        this.department = department;
    }
    money(time){
        return `${10000*time} 원`
    } 
}

const pullTime = new PullTimeEmployee('영웅','조리')
console.log(pullTime)
console.log(pullTime.money(120))



