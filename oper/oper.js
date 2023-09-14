data1 = "1"
data2 = 1
console.log(data1 === data2)
// == : 값만 비교, 문자열일 경우 자동으로 파싱된다.
// === : 값과 타입 모두 비교

// undefined는 false 값
// OR일때 false랑 값이 같이 있으면, 값이 들어감
// page = page || 10 , 현재페이지에서 사용 , 제일 처음 목록을 띄울때 page가 undefined

// and 연산: && / 앞에 false가 있으면 뒤로 넘어가지 않고 false 도출,
// 요소중에 false가 있으면 false를 도출 true면 값을 도출

check = false

console.log(10 && check)

// 삼항 연산자
// 조건식 ? 참 : 거짓

