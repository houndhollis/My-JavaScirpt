function Dog(name){
    this.name = name;
    //2. 정적으로 바인드 할려면 arrow 함수를 사용: arrow 함수는 렉시컬 환경에서의 this를 기억한다.
    // 화살표 함수 밖에서 제일 근접한 스코프의 this 를 가리킨다.
    this.dogName = () => {
        console.log(this.name)
    }

    //1. bind 함수를 이용해서 수동적으로 바인딩 해주기
    // 언디파인이 안뜨고 17번 줄에 꼬미가 그대로 뜬다
    // 객체가 만들어지는 시점에 this 가 영원히 바인드된다.
    // this.dogName = this.dogName.bind(this);
    // 하지만 이것보다 더 편한 방법은 !
    // 화살표 함수를 써주면 된다 10번줄을 주석처리 하겠다.
}
const dog1 = new Dog('꼬미')

function bindName(bindPrint){
    console.log('자 가바자고 바인드!')
    bindPrint()
}
bindName(dog1.dogName) //자 가바자고 바인드 ! 꼬미

function Cat(name){
    this.name = name;
    this.catName = function(){
        console.log(`나는 고양이 : ${this.name}`)
    }
}
const cat1 = new Cat('까미')




