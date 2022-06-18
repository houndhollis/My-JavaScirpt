const user = ['웅','수','희','은','수']

const result = user.filter((el)=>{
    return el !== '수'
})
console.log(result)

const result2 = user.map((el)=>{
    return el + '님'
}) 
console.log(result2)

const result3 = user.findIndex((el)=>{
    return el === '수'
})
console.log(result3)

const result4 = user.find((el)=>{
    return el === '웅'
})
console.log(result4)

const result5 = user.indexOf('웅')
console.log(result5)

console.clear()

const num = [1,2,3,4,5]
const numResult = num.reduce((arr,cur)=>{
    return arr+cur // 15
})
console.log(numResult)

const num1 = [5,1,20,10,30,6,70]
const num1Result = num1.sort((a,b)=>a-b)
console.log(num1Result) // [1,  5,  6, 10, 20, 30, 70]

num.map((el)=>{
    console.log(el*2)
})

