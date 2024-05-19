// 아래에 코드를 작성해주세요

// ============== 주문서 접수 버튼 선택 ============== 
const complete = document.getElementById('complete');

// ============== 이벤트 핸들러 작성 ============== 
const handleSubmit = () => {
  // 재료 선택 & 값 변경
  const radiobox = document.querySelectorAll("input[type='radio'][name='food']:checked");
  document.getElementById('result1').textContent = radiobox[0].value;
  console.log(radiobox);

  // 맵기 선택 & 값 변경
  const select1 = document.getElementById("spicy").value;
  document.getElementById('result2').textContent = select1;

  // 얼얼 선택 & 값 변경
  const select2 = document.getElementById("burning").value;
  document.getElementById('result3').textContent = select2;
}

// ============== 이벤트 리스너 연결 ============== 
complete.addEventListener('click', handleSubmit);