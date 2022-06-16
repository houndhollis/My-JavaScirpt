//
//비동기와 동기
// 자바스크립트는 싱글 쓰레드다 즉 한가지일만 할수없다 !
// 비동기 개념이 들어오게 된 이유 

const btn = document.querySelector('button')

btn.addEventListener('click',()=>{
    alert('You clicked me!')

    let pElem = document.createElement('p')
    pElem.textContent = 'This is a new';
    document.body.appendChild(pElem);
})

// 알럿 메세지가 뜨지만 밑에줄은 실행이 아직안된다 곧 싱글 쓰레드 이기때문에 그렇다.
// 확인을 누르면 그재서야 추가되는것을 알수있다. 

console.log('시작 ===') // 1순위

setTimeout(()=>{
    console.log('Set Timout') // 3순위
},1000)

console.log('종료') //2순위