// this 바인딩
// 자바 C++ , C# 대부분의 객체지향 프로그래밍 언어에서는
// this는 항상 자신의 인스턴스 자체를 가리킴!
// 정적으로 인스턴스가 만들어지는 시점에 this 가 결정됨
// 하지만, 자바스크립트에서는 누가 호출하냐에 따라서 this가 달라짐

function Dog(name){
    this.name = name;
    this.dogName = function(){
        console.log(this.name)
    }
}
const dog1 = new Dog('꼬미')

function Cat(name){
    this.name = name;
    this.catName = function(){
        console.log(`나는 고양이 : ${this.name}`)
    }
}
const cat1 = new Cat('까미')

dog1.dogName()//꼬미
cat1.catName()//나는 고양이 : 까미

dog1.dogName = cat1.catName
dog1.dogName()//나는 고양이 : 꼬미
// 결과를 보듯이 cat1.catName 을 줬지만 this 는 도그생성자의 this이다.
console.clear()
function namewhy(callBack){
  console.log('자 준비하시고!')
  callBack();
}
namewhy(dog1.dogName)//자 준비하시고!
                     //나는 고양이 : undefined

                     //연습
