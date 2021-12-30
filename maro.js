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