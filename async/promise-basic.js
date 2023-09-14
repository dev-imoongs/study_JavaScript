const promise = new Promise(function(resolve, reject){
  check = true
  if(check){
    resolve("안녕");
  }else{
    reject("잘가");
  }
})

promise.then(console.log).catch(console.log);