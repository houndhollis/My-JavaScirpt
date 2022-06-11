//주석 Comments
//한줄 짜리 주석을 작성할 때 씀 
//TODO(영웅): 해야할 일을 작성
//TODO(영웅):  XX기능 구현하기

 /**
  * 주석은 코드 자체를 설명하는 것이 아니라,
  * 왜 와이,와 어떻게() 를 설명하는 것이 좋음
  * 단 정말 필요한 경우에만 
  */

 // 외부에서 많이 쓰이는 함수 API 인 경우 JDOC 

 // try catch finally
function readFile(path){
    throw new Error('파일 경로를 찾을 수 없음')
    return '파일의내용';

}

function processFile(path){
    const content = readFile(path);
    const result = 'hi'+ content
}

const result = processFile('경로')
console.log(result)