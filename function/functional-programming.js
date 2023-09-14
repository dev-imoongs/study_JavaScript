// 함수는 값으로 보자 !!

data = 10
function data() {}
// 이름이 없는 함수를 익명 함수라고 부르고 이를 다른 저장공간에 담을 수 있다.
data = function() {}
data = () => {}

print = () => {console.log('함수 실행')}

/* ------------------------------------------------------------------- */
result = (num1, num2,callback) => {callback(num1+num2)}



result(1,2,(result) => {console.log(result)})