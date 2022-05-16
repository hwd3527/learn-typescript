var Shoes;
(function (Shoes) {
    Shoes[Shoes["Nike"] = 0] = "Nike";
    Shoes[Shoes["Adidas"] = 1] = "Adidas";
    Shoes["Rebok"] = "\uB9AC\uBCF5";
    Shoes["New_balance"] = "\uB274\uBC1C\uB780\uC2A4";
})(Shoes || (Shoes = {}));
var myShoes = Shoes.Nike;
console.log(myShoes); //0
var myShoes2 = Shoes.Rebok;
console.log(myShoes2); //리복
//예제
var Answer;
(function (Answer) {
    Answer["Yes"] = "Y";
    Answer["No"] = "N";
})(Answer || (Answer = {}));
// function askQuestion(answer: string){
//   if(answer === 'yes'){
//     console.log('정답입니다');
//   }
//   if(answer === 'no'){
//     console.log('오답입니다');
//   }
// }
function askQuestion2(answer) {
    if (answer === Answer.Yes) {
        console.log("정답입니다");
    }
    if (answer === Answer.No) {
        console.log("오답입니다");
    }
}
askQuestion2(Answer.Yes);
askQuestion2(Answer.No);
