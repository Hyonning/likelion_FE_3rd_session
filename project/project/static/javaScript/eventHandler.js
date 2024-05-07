// addEventListener 메서드
const item = document.getElementById('item');

const listener = () => {
  if(item.textContent == "메롱"){
    item.textContent = "클릭해봐!";
  }
  else item.textContent = "메롱";
}

item.addEventListener('click', listener);

// ----------------------------------------------
// 체크박스 이벤트 핸들러
const checkboxes = document.querySelectorAll("input[type='checkbox'][name='group']");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (event) => {
    if (event.target.checked) {
      console.log(`${event.target.id}이(가) 선택되었어요!`);
    } else {
      console.log(`${event.target.id}이(가) 해제되었어요!`);
    }
  });
});

// ----------------------------------------------
// 라디오 버튼 이벤트 핸들러
const radiobtns = document.querySelectorAll("input[type='radio'][name='ice']");
radiobtns.forEach((radiobtn) => {
  radiobtn.addEventListener("change", (event) => {
    console.log(`난,, ${event.target.value} 맛이 젤루 조아`);
  });
});

// ----------------------------------------------
// 셀렉트 이벤트 핸들러
const select = document.querySelector("select");
select.addEventListener("change", (event) => {
  console.log(`오늘은 ${event.target.value}이야 XD`);
});
