// 타입 추론 기본 1

var a = 10;
var b = 'abc';

function getC(c = 10){
  var d = 'hi';
  return c + d;
}

// 타입 추론 기본 2
// interface Dropdown2<T> {
//   value: T;
//   title: string;
// }
// var shoppingItem: Dropdown2<string> = {
//   value: 'abc',
//   title: 'hello'
// }

//타입 추론 기본 3
interface Dropdown2<T> {
  value: T;
  title: string;
}
interface DetailedDropdown<K> extends Dropdown2<K>{
  description: string;
  tag: K;
}
var DetailedDropdown: DetailedDropdown<string> = {
  title: 'abc',
  description: 'ab',
  value: 'a',
  tag: 'b'
}

// Best Common Type
var arr = [1,2,true, true, 'a'];