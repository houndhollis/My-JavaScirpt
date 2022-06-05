// 프로퍼티 열거
//


const obj ={
    prop1:'value1',
    prop2:'value2',
    prop3:'value3',
    prop4:'value4',
}

for(const key in obj){
    console.log(obj[key])//value1,value2,value3,value4
}

// 객체의 값을 가져올때
// obj.prop1
// obj['prop1']

//조작

const person = {
    firstName : 'kim',
    location  : 'korea',
}
person.lastName = 'woong'//추가
console.log(person) //{ firstName: 'kim', location: 'korea', lastName: 'woong' }
person.lastName = 'youngwoong'//수정

// 삭제
delete person.lastName;
console.log(person) //{ firstName: 'kim', location: 'korea' }



