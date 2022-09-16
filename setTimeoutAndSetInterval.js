// setTimeout
// 일정 시간이 지난 후 함수 실행
// 3초 후에 로그를 찍는 함수
function fn() {
    console.log(3);
};

// 인자: 실행할 함수, 시간(초)
setTimeout(fn, 3000);

// 같은 코드
/*
setTimeout(function(){
    console.log(3);
}, 3000);
*/

// 인자가 필요한 경우, 시간 뒤에 추가
function showName(name){
    console.log(name);
};

// time id 반환
let tId = setTimeout(showName, 3000, 'Mike');

// setInterval
// 일정 시간 간격으로 함수 반복
// setTimeout의 동작을 반복
tId = setInterval(showName, 3000, 'Mike');

// 예정된 작업 제거(스케쥴링 취소)
clearTimeout(tId);

// delay time이 0일 때, 로그 바로 찍히지 않음
// 이유: 현재 실행 중인 스크립트가 종료된 이후에 스케쥴링 시행
// 브라우저는 기본적으로 4ms의 대기 시간이 있다
setTimeout(function(){
    console.log(2); // 두번째
}, 0);

console.log(1); // 첫번째

// 사용 예시
// user가 접속한 시간 알아내기
let num = 0;

function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
};

// 5초동안만 확인
function showTime(){
    console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
    if(num>5){
        clearInterval(tId);
    }
};

tId = setInterval(showTime, 1000);