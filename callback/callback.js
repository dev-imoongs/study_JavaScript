// 두 정수의 덧셈 결과 출력
function add(num1, num2, callback){
  if(callback){
    callback(num1 + num2)
  }
  return num1 + num2
}

function printTotal(result){
  console.log(result)
}

add(1, 2, printTotal)

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
function mul(num1, num2, callback){
  if(callback){
    callback(num1 * num2)
  }
  return num1 * num2
}

mul(3, 4, function(result) {console.log(result * 2)})

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
function getFullName(lastName, firstName, callback){
  if(callback){
    callback(lastName + firstName)
  }
}

function addNim(name){
  console.log(`${name}님`)
}

getFullName('한', '동석', addNim)
getFullName('한', '동석', function(name){console.log(`${name}님`)})
getFullName('한', '동석', name => {console.log(`${name}님`)})

// 상품 가격과 총 합을 입력받고 개수를 알아낸 뒤 개수가 5개 이하라면 true 아니면 false

function judge(price,totalPrice,callback) {
  if(callback(price,totalPrice) <= 5) {
    return true
  }else{
    return false
  }
}

function temp(price,totalPrice) {
  num = totalPrice / price
  return num
}

console.log(judge(5000,50000,temp))

//

(function(price,total,callback ){
  callback (total/price,result => console.log(result)  )
})  (1000,10000, (result,callback) => callback (result<=5 ? true:false)  );

// 결제 상품 이름과, 결제 상태를 전달 받아서
// 결제 상태가 true일 경우 결제 완료, false일 경우 결제 취소 출력


function inputInfo(productName, productStatus) {
  return productStatus
}

function printStatus(productName,productStatus,callback) {
  if(callback){
    if(callback(productName,productStatus)){
      return "결제 완료"
    }else{
      return "결제 취소"
    }
  }else{
    return "정보가 없음"
  }
}

console.log(printStatus("상품",true))

