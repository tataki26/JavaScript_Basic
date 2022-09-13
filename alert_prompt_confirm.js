// alert: 알려줌
// prompt: 입력 받음
// confirm: 확인 받음

//
// alert & prompt
//

const userName = prompt('이름을 입력하세요.');
alert("환영합니다, " + `${userName}` + "님!");

// prompt 창에 취소를 누르면 변수에 null이 들어감

// promt(안내 메세지, 디폴트값)
// 디폴트값이 미리 입력되어 있음
const msg = prompt("예약일을 입력해주세요.", "2022-09-");

//
// confirm
//

// 확인과 취소 버튼을 가지고 있는 알림창
const isAdult = confirm("당신은 성인입니까?");
console.log(isAdult); // 사용자가 누른 버튼에 따라 boolean 값 가짐

// 사용자의 선택을 다시 확인시켜줄 때 사용
// ex:) 결제 하시겠습니까? 삭제하겠습니까?

// 알림창 단점
// 1. 스크립트 일시 정지
// - 알림창 닫힐 때까지 다음 코드 실행X
// 2. 스타일링X
// - 브라우저 따라 스타일 달라짐(위치, 모양 정할 수 없음)
// - 따라서, 직접 제작하는 경우가 많음(html, css 활용)
// - 기본 동작 확인 시, 유용