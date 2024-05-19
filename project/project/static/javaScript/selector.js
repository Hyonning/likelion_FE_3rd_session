// ----------------------------------------------------
// 1번 실습 - Element 찾기
const element1 = document.getElementById("element1");
const element2 = document.getElementsByClassName("element2");
const element3 = document.querySelector("#element3");

// 브라우저에서 출력되는 콘솔 내용을 확인해보세요.
console.log(element1);
console.log(element2);
console.log(element3);

// 아래에서 코드를 완성하여 태그 내 글자를 출력해보세요.
console.log("element1의 글자 : " + element1.innerText);
console.log("element2의 글자 : " + element2[0].innerText);
console.log("element3의 글자 : " + element3.innerText);

// ----------------------------------------------------
// 2번 실습 - 틀린 단어 찾기
// 아래에 코드를 작성하세요.
const dog = document.getElementById("dog");
const phone = document.getElementById("phone");
const water = document.getElementById("water");

dog.innerText = "강아지";
phone.innerText = "휴대폰";
water.innerText = "물";

console.log(dog);
console.log(phone);
console.log(water);



// ----------------------------------------------------
// 3번 실습 - 속성 변경하기
// 네이버 주소 : https://www.naver.com
// 아래에 코드를 작성하세요.

const q1 = document.querySelector('.quest1');
const q2 = document.querySelector('.quest2');
const q3 = document.querySelector('.quest3');
const q4 = document.querySelector('.quest4');
const q5 = document.querySelector('.quest5');


q1.style.color = 'red';
q2.style.visibility = 'hidden';
q3.style.backgrounColor = 'blue';
q4.style.display = 'none';
q5.setAttribute('href', 'https://www.naver.com');