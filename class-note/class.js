//prototype
var user = {name:'capt', age:100};
var admin = {};
admin._proto_ = user;
admin.role = 'admin';
console.log(admin);

//es2015(es6)
class Person {
  //클래스 조직
  constructor(name, age){
    console.log('생성 되었습니다');
    this.name = name;
    this.age = age;
  }
}

var seho = new Person('세호', 30); //생성 되었습니다.
console.log(seho);