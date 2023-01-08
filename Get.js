Get 요청 
서버로 부터 정보를 조회하기 위한 메소드입니다.
GET은 요청할때 필요한 데이터를 Body 에 담지않고, 쿼리스트링을 통해 전송합니다.

또한 GET은 불피요한 요청을 제한하기 위해 요청이 캐시될 수도 있습니다. Js,css,이미지 같은 정적 컨텐츠는 데이터양이 크고 변경될 일이 적어서 반복해서 동일한 요청을 보낼 필요가 없습니다.
여기서 요청 파라미터명은 name1, name2이고, 각각의 파라미터는 value1, value2라는 값으로 서버에 요청을 보내게 됩니다.
 
www.example-url.com/resources?name1=value1&name2=value2


* GET 요청을 캐시할 수 있습니다.
* GET 요청은 브라우저 기록에 남아 있습니다.
* GET 요청을 북마크할 수 있습니다. (특정 페이지 링크하거나 북마크 가능)
* GET 요청은 민감한 데이터를 처리할 때 사용해서는 안 됩니다.
* GET 요청에는 길이 제한이 있습니다.
* GET 요청은 데이터를 요청하는 데만 사용됩니다(수정 아님).


Post 방식 
Post 는 리소스를 생성 / 업데이트 하기 위해 서버에 데이터를 보내는데 사용됩니다.
POST 를 통해 서버로 전송된 데이터는 HTTP 요청의 요청 본문에 저장됩니다.

* POST 요청은 캐시되지 않습니다
* POST 요청은 브라우저 기록에 남아 있지 않습니다.
* POST 요청은 북마크할 수 없습니다.
* POST 요청에는 데이터 길이에 대한 제한이 없습니다.

요청에 Body 유무 GET은 URL 파라미터에 요청하는 데이터를 담아 보내기 때문에 HTTP 메세지에 body 가 없다. POST 는 body 에 데이터를 담아 보내기 때문에 당연히 HTTP 메세지에 존재합니다.

GET은 멱등성 POST 는 멱등성이 아니다

멱등이란?
멱등의 정의는 연산을 여러 번 적용하더라도 결과가 달라지지 않는 성질입니다.