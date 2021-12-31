/*
//alert('Hello Jihun');
    // 이걸로 공격할 수 있ㅇ므 쿠쿠ㄹ삥뽕(개발자마음)
    var num=6;
    for(var i=0;i<=10;i++){
      if(num!=i)
        alert(i);
    }
    
    var num1=4;
    var num2=5;
    document.getElementById("result").innerText=num1+num2;

var base=2;
var text=base+" x ";
// text 를 출력하면 2x 가된다
var pix1=1;
var pix2=2;
var pix3=3;
var pix4=4;

for(let i = 2; i <= 9; i++) {
    document.write('<br>');
    document.write(i + '단');
    document.write('<br>');
    for(let j = 1; j <= 9; j++) {
      document.write(i + ' x ' + j + ' = ' + (i*j));
      document.write('<br>');
    }
  }



function minari(){
    for(let i = 1; i <= 2;i++) {
        alert("무한으로 즐겨요");
    } 
}
*/
//above contents have been turning into comments by developer
/*document.querySelector("input").addEventListener("input", function () {
  console.log("글자입력");
});
//input console showing
document.querySelector("button").addEventListener("button", function () {
  console.log("버튼클릭");
});
//click button console showing
*/

const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $notice = document.querySelector("#notice");
const $score = document.querySelector("#score");

let word; //제시어
let answer; //새로 입력한 단어
let notice; //알림

score.innerText = 0; //처음점수
const onClickButton = () => {
  if (!word) {
    word = answer; //입력한 단어가 제시어가 된다
    $word.textContent = word;
    $input.value = ""; //입력해서 들어가면 비워짐
    if (!word) {
      
    } else {
      $score.textContent++ //공백일때 점수올라가는 버그수정
    }
    
  } else {
    //비어있지 않음
    if (word[word.length - 1] === answer[0]) {
      //정답일때
      word = word + " - " + answer;
      $word.textContent = word;
      $input.value = "";
      $score.textContent++
        
   
    } else {
      //정답이 아닐때
      $notice.textContent = "정답이 아닙니다";
      $input.value = "";
    }
  }
};

const onInput = (event) => {
  answer = event.target.value;
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);