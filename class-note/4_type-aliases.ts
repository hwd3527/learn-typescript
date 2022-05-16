// interface Persons {
//   name: string;
//   age: number;
// }

type Persons = {
  name: string;
  age: number;
}

var seho: Persons = {
  name: '세호',
  age: 30
}

type MyString = string;
var strs: MyString = 'hello';

type Todo = {
  id: string; 
  title: string; 
  done: boolean;
};
function getTodo(todo: Todo){
  
}