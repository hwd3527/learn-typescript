// function logMessage(value: any){
//   console.log(value);
// }
// logMessage('hello');
// logMessage(100);

var sehos: string | number | boolean;
function logMessage(value: string | number) {
  // console.log(value);
  if(typeof value === 'number'){
    console.log(value.toLocaleString());
  }
  if(typeof value === 'string'){
    console.log(value.toString());
  }
  throw new TypeError("value must be string or number");
}
logMessage('hello');
logMessage(100);

interface Developer3 {
  name: string;
  skill: string;
}
interface Person3 {
  name: string;
  age: number;
}
function askSomeone(someone: Developer3 | Person3){ //union
  // someone.age;
  // someone.name;
  // someone.skill;
}
askSomeone({name:'디벨로퍼', skill:'웹 개발'});
askSomeone({name:'캡틴', age:100});

function askSomeone2(someone: Developer3 & Person3) { //intersection
  someone.age;
  someone.name;
  someone.skill;
}
askSomeone2({name:'디벨로퍼', skill:'웹개발',age:34});