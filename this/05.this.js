// 함수를 어떻게 호출했는지 상관하지 않고 this 값을 설정할수 있는 bind 메서드를 도입!
// 전역공간에서의 this 는 윈도우를 바라본다.

// 함수에서의 this 는 또다르다.
// 전역 공간을 가르킨다.

// function func(){
//     console.log(this)
// }
// func() 

const obj ={
    name:  'obj',
    method : function (){
        return this.name
    }
}
console.log(obj.method()) //obj

// 명시적 바인딩 하기!

const user1 = {
    name : 'woong',
    sayName : function (){
        return this.name + '이다'
    }
}

const user2 = {
    name : 'su',
    sayName : function (){
        return this.name + '이다'
    }
}

function sayFullName(firstName){
    return firstName + this.sayName()
}

const result = sayFullName.call(user2,'퍼스트네임은: ')
console.log(result) // 퍼스트네임은: su이다

// apply 같은 경우 배열로 받을수가 있다.