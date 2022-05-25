// class Aruit{//클래스 class
//     //생성자: new 키워드로 객체를 생성할때 생성되는 함수
//     constructor(name,emoji){ 
//         this.name = name;
//         this.emoji = emoji;
//     }
       
//     display = () => {
//         console.log(`${this.name}: ${this.emoji}`)
//     };
// }
// //apple 은 Aruit 클래스의 인스턴스이다.
//     const apple = new Aruit('apple','🍎')
//     const orange = new Aruit('apple','🍊')
    
//     console.log(apple);
//     console.log(apple.name)
//     console.log(orange)
//     apple.display()

    ///static///
// static 정적 프로퍼티,매서드
// class Aruit{//클래스 class
//     //생성자: new 키워드로 객체를 생성할때 생성되는 함수
//     constructor(name,emoji){ 
//         this.name = name;
//         this.emoji = emoji;
//     }
//     //클래스 레벨의 매서드
//     static makeRandomFruit(){
//         //클래스 레벨의 매서드에서는 this 를 참조할 수 없음
//       return new Aruit('banana','🍌');
//     }
//     //밑에꺼는 인스턴스 레벨의 매서드    
//     display = () => {
//         console.log(`${this.name}: ${this.emoji}`)
//     };
// }
//     const banana = Aruit.makeRandomFruit();
//     console.log(banana)
// //apple 은 Aruit 클래스의 인스턴스이다.
//     const apple = new Aruit('apple','🍎')
//     const orange = new Aruit('apple','🍊')
    
//     console.log(apple);
//     console.log(apple.name)
//     console.log(orange)
//     apple.display()

//-----------------필드-------------------
// 접근제어자 - 캡슐화 
// private(#), public(기본), protected 
// class Aruit{//클래스 class
//         //생성자: new 키워드로 객체를 생성할때 생성되는 함수
//         name;
//         emoji;
//         type = '과일';
//         constructor(name,emoji){ 
//             this.name = name;
//             this.emoji = emoji;
            
//         }
           
//         display = () => {
//             console.log(`${this.name}: ${this.emoji}`)
//         };
//     }
//     //apple 은 Aruit 클래스의 인스턴스이다.
//         const apple = new Aruit('apple','🍎')
//         apple.name ='오렌지'
//         console.log(apple)
     

        //-------------세터와 게터-------------//
        //접근자 프로퍼티 (Accessor property)
        class Student{
            constructor(firstName,lastName){
                this.firstName = firstName
                this.lastName = lastName
            } 
            get fullName () {
                return `${this.lastName} ${this.firstName}`
                
            } 
            set fullName(value){
                console.log(value);
            }
        }

        const student = new Student('수지','김');
        console.log(student.fullName) // 함수앞에 get을 써주면 
        // Student 클래스 쪽에다가 ! 그러면 함수호출 안해도된다
        student.fullName = '김철수'
        