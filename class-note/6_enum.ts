enum Shoes {
  Nike,
  Adidas,
  Rebok = '리복',
  New_balance = '뉴발란스',
}

var myShoes = Shoes.Nike;
console.log(myShoes); //0
var myShoes2 = Shoes.Rebok;
console.log(myShoes2); //리복

//예제
enum Answer {
  Yes = 'Y',
  No = 'N'
}
// function askQuestion(answer: string){
//   if(answer === 'yes'){
//     console.log('정답입니다');
//   }
//   if(answer === 'no'){
//     console.log('오답입니다');
//   }
// }
function askQuestion2(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다");
  }
  if (answer === Answer.No) {
    console.log("오답입니다");
  }
}
askQuestion2(Answer.Yes);
askQuestion2(Answer.No);