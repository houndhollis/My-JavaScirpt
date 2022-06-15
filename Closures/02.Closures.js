// 은닉화

function a(){
    let temp = 'a'
    return temp
}

// const result = a();
// console.log(temp) // 접근을 할수없지만 a()라는 함수를 실행하면 값을 얻을수있다.
// 이것이 클로저를 활용한 것이 아닐까 한다.

function privateData(){
 let temp = 'a';

 return{
     value: function(){
         return temp
     },
     changeValue: function(newVal){
        temp = newVal;
     }
  }
}

const private = privateData()
console.log(private)
console.log(private.value()) //a
console.log(private.changeValue('b')) 
console.log(private.value()) //b

//은닉화를 할수가 있다! 하지만 private2 를 만들어서 또 value 를 찍으면 a인것을 볼수있다.
// 클로져를 많이 쓸때는 debounce이다.

