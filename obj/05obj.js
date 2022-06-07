// 객체들 순회하기 

const obj={
        name:'woong',
        age:26,
        location:'korea',
        job:'engineer', 
        members:[
            {
                name:'jongsu',
                age:26,
                location:'korea'
            }
        ]
}

// 배열로 만들어준다
const objectKey = Object.keys(obj)
console.log(objectKey)
//[ 'name', 'age', 'location', 'job', 'members' ]
const objectvaluse = Object.values(obj)
console.log(objectvaluse)
//[
//     'woong',
//     26,
//     'korea',
//     'engineer',
//     [ { name: 'jongsu', age: 26, location: 'korea' } ]
//   ]

//배열전체
console.clear()
const objectEntries = Object.entries(obj)
console.log(objectEntries)
// [
//     [ 'name', 'woong' ],
//     [ 'age', 26 ],
//     [ 'location', 'korea' ],
//     [ 'job', 'engineer' ],
//     [ 'members', [ [Object] ] ]
//   ]
// 인덱스 마다 배열을 가지고 있다.