const arr = ['one','two','three']

// let [one,two,three] = arr // 하나씩 할당해주는 방법이다.   
console.log(arr) //[ 'one', 'two', 'three' ]

// 이거보다 더 간편하게 하는 방법은 
// let [one,two,three,four ='four'] = ['one','two','three']
// console.log(one) //'one'
// console.log(four) // undefined

// 언디파인은 나오지 않는게 좋다 그러므로 기본값을 할당해주면 된다. 7번째줄 추가

let a = 10;
let b = 20;
// let c = 0;
// c = a;
// a = b;
// b = c 
// console.log(a,b) // 방법이 귀찮으니 비구조화 할당!

[a,b] = [b,a]
console.log(a,b)  // 20 , 10

let obj = {one:'one',two:'two',three:'three',name:'woong'}
const {name,one,two,three} = obj
console.log(obj) //{ one: 'one', two: 'two', three: 'three', name: 'woong' }

const cookie = {
    base:'cookie',
    madeIn:'korea'
}
const cookie2 = {
    base:'cookie',
    madeIn:'japan'
}
const cookie3 ={
    base:'cookie',
    madeIn:'china'
}
const newCookie = {
    ...cookie,
    taste:'good'
}
console.log(newCookie) //{ base: 'cookie', madeIn: 'korea', taste: 'good' } 
// 이것이 스프레드 연산자!! 배열도 사용가능! 
// 객체를 펼치는것 뿐만 아니라!

const noTopingCookies = ['촉촉한초코쿠키','눅눅한초코쿠키'];
const topingCookies = ['바나나초코쿠키','딸기쿠키']
const allCookies = [...noTopingCookies,...topingCookies];
console.log(allCookies)
//[ '촉촉한초코쿠키', '눅눅한초코쿠키', '바나나초코쿠키', '딸기쿠키' ]

console.clear()
function recursion () {
    console.log("This is")
    console.log("recursion!")
    if('This is가 10번 반복하면 end()' )
    recursion()
  }
  recursion()