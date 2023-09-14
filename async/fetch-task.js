// https://jsonplaceholder.typicode.com/users를 fetch로 요청하여
// zipcode만 추출하기

fetch("https://jsonplaceholder.typicode.com/users")
.then((response) => {
  if(!response.ok){
    throw new Error(`response: ${response.status}`)
  }
  return response.json();
})
.then((posts) => {
  if(!posts || posts.length == 0){
    throw new Error("none result");
  }
  // users가 array
  return posts.map((user, i) => {
    return {zipcode: user.address.zipcode};
  })
})
.then(console.log)
.catch((error) => {
  console.log(error);
  console.log("error");
});

