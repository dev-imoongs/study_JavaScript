// let datas = [20, 5, 6, 12, 10];

// push(): 가장 마지막에 값 추가
// datas.push(100);
// console.log(datas);
// console.log(datas[2]);

// join(): 전달한 값으로 구분한 뒤 문자열로 리턴
// console.log([1, 2, 3, 4, 5].join(","))

// slice(begin, end): 원하는 부분을 추출하기 위해 시작 인덱스(inclusive)와 마지막 인덱스(exclusive)를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다.
// console.log(datas.slice(1, 3))
// console.log(datas.slice(1))

// pop(): 마지막 요소를 삭제할 때
// shift(): 첫번째 요소를 삭제할 때
// datas.pop();
// datas.shift();
// console.log(datas);

// splice(인덱스, 개수, ...args 대체할 값(생략가능)): 원하는 위치에 있는 요소를 삭제할 때

// datas.splice(1,1);
// console.log(datas);

// forEach(callback): 반복문
// datas.forEach(function(data){console.log(data)});
// datas.forEach(data => console.log(data));
// datas.forEach(console.log)

// 기존 datas Array에 있는 데이터를 제곱으로 변경!

// datas = [1,2,3,4,5,6,7,8,9,10];

// let a = datas.map((data,idx,datas)=> datas[idx]= 1).filter((data,idx,datas)=> idx==1);

// console.log(a);
// console.log(datas);
// true면 반환

// indexOf(값): 값을 해당 Array에서 찾은 뒤 인덱스 번호 리턴, 못찾으면 -1 리턴
// console.log(datas.indexOf(12));

// map(callback): 기존 값을 원하는 값으로 변경하여 리턴
// console.log(datas.map(data => data / 2));

// 월~일까지 Array객체에 담은 후 출력
// JavaScript도 .split()사용가능

// let days = ["월", "화", "수", "목", "금", "토", "일"];

// console.log(days.map(day => day));

// days.splice(0,4,"월요일싫어","화요일싫어","수요일싫어","목요일싫어")
// days.map(day => console.log(day));

// days.forEach((v)=>console.log(v));

// Array 프로토 타입 선언 Array(undefinded로 생성할 칸).fill(초기화 할 값 = 0);
let datas = new Array(7).fill(0);
// datas.shift();
console.log(datas);

