const arr = ['woong','jong','jin']
//unshift > 배열의 앞에 요소추가
//push >  배열의 끝에 요소 추가
//shift > 배열의 앞에 요소 제거
//pop > 배열의 끝에 요소 제거
//splice > 배열의 인덱스 기반으로 요소 추가 및 삭제


console.log(arr.splice(0,1,'korea'))//[ 'woong' ]
console.log(arr)//[ 'korea', 'jong', 'jin' ]
console.log(arr.splice(1,0,'japan'))
console.log(arr)//[ 'korea', 'japan', 'jong', 'jin' ]


// 원본 배열을 훼손 시킴으로 잘사용 해야한다.
// 배열을 합쳐보자! concat() 원본배열 훼손 안시킴

const arr2 = ['one','two','three']
const newArr = arr2.concat('four')
console.log(newArr) //[ 'one', 'two', 'three', 'four' ]

const newArr2 = [...arr2,'4','5']//[ 'one', 'two', 'three', '4', '5' ]
console.log(newArr2)
console.clear()


//고차 함수 !***//

const num = [1,2,3,4,5,6]
const num2=num.map((el)=>el*2)
console.log(num2) //[ 2, 4, 6, 8, 10, 12 ]


const num3 = num.filter((el)=>el%2===1)
console.log(num3) //[ 1, 3, 5 ]


const num4 = num.reduce((arr,cur)=>{
  return arr+cur
},0) 
console.log(num4) //21

//소트
const number = [2,1,20,10,5]
const numberSort = number.sort((a,b)=> a-b)
console.log(numberSort) // [ 1, 2, 5, 10, 20 ]

const string = ['가','마','바','아','나']
const stringSort = string.sort((a,b)=> {
  return a.localeCompare(b);
})
console.log(stringSort) //[ '가', '나', '마', '바', '아' ]