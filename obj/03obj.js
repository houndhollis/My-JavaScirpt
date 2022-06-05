// 프로퍼티 접근자 getter,setter


const person ={
    firstName : 'kim',
    lastName : 'young-woong',

    get toUpperName(){
        return this.firstName.toUpperCase()
    },

    set setName(newFirstName){
        if(typeof newFirstName !== 'string')
        this.firstName = 'undefined name'
    }


}

person.setName = 123455;
console.log(person.toUpperName) //KIM

