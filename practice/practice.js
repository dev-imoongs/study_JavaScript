// 배열 나누기
// 함수 division은 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
// 이후, 해당 배열들을 요소로 갖는 배열을 반환한다

// ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
//     ex) [1...80] => [[1...5], [6...10], [11...15], ... , [76...80]]
// */

// console.log(division([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
//[[1,2,3],[4.5.6],[7,8,9]]


// function division(element, len) {
//   let startTemp = 0;
//   let tempLength = element.length/len;
//   // console.log(`tempLength: ${tempLength}`)
//   for(let i=0; i<(tempLength); i++){
//     // console.log(`startTemp: ${startTemp}`);
//     // console.log(`len: ${len}`);
//     // console.log(`tempLength: ${tempLength}`);
//     arr1.push(element.splice(startTemp,len));
//   };
//   console.log(arr1);
// };

let arr1 = [];

function division(n, len) {
  let arr2 = new Array(n).fill(0).map((v,i)=>i+1);
  let startTemp = 0;
  let tempLength = arr2.length/len;
  // console.log(`tempLength: ${tempLength}`)
  for(let i=0; i<(tempLength); i++){
    // console.log(`startTemp: ${startTemp}`);
    // console.log(`len: ${len}`);
    // console.log(`tempLength: ${tempLength}`);
    arr1.push(arr2.splice(startTemp,len));
  };
  console.log(arr1);
};

division(50,4);

// 배열을 만드는 함수를 따로 만들어서 콜백으로