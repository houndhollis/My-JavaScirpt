function* multitpleGenerator(){
    for(let i = 0; i < 10; i++){
        yield i ** 2;
    }
}
const multitple = multitpleGenerator();
let next = multitple.next();
console.log(next.value , next.done)

// multitple.return();
multitple.throw('Error!')

next = multitple.next();
console.log(next.value , next.done)

