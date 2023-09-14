//프로토 타입으로 변환

function User(name, age, point) {
  this.name = name;
  this.age = age;
  this.point = point;
}
mart = new Object;
mart.user1 = new User("홍길동",30,3500);
mart.user2 = new User("이순신",22,0);
mart.user3 = new User("장보고",66,9500);

console.log(mart);