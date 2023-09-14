// 1~10까지 Array객체에 담은 후 짝수만 출력
// let evenPrint = new Array(10).fill(0);

// console.log(evenPrint.map((v,i)=>i+1).filter((v,i)=>(i+1) % 2 == 0));

// 한글을 숫자로
const hangle = "공일이삼사오육칠팔구".split("");
const checkNum = "칠사오구".split("");

checkNum.forEach(v=>console.log(hangle.indexOf(v)))
// 숫자를 한글로
const number = "7309".split("");

// let result = ""
// number.forEach(v=>console.log(result += hangle[parseInt(v)]))
// console.log(number.map(v=>hangle[parseInt(v)]).join(""))

// 1~100까지 합 출력
