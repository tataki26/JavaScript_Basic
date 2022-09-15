//
// ',"",`
//

// html 코드에는 " "가 포함된 경우가 많으므로 작은 따옴표 권장
let html = '<div class="box_title">제목 영역</div>';

// 영어 문장에는 '가 포함된 경우가 많으므로 큰 따옴표 권장
let desc = "It's 3 o'clock.";

// `은 문자열 내부에서 변수를 사용할 때 권장
let add = `2 더하기 3은 ${2+3}입니다.`;

// 여러 줄을 쓸 때도 ` 권장
let msg = `오늘은 맑고 화창한
날씨가 계속 되겠습니다.`;

// 따옴표들은 한 줄로 쓰되 \n까지 활용해야 한다 => 불편함
let msg2 = '오늘은 맑고 화창한\n날씨가 계속 되겠습니다.';

// 문자열 길이
// 아이디와 비밀번호 길이 제한에 사용
let msg3 = '안녕하세요.';
msg3.length; // 6

// 특정 위치에 접근 - 인덱스
// 배열과 다르게 불변형으로 글자를 바꿀 수 없다 
msg3[2]; // '하'

// 대문자, 소문자 치환
let desc2 = "Hi, guys.";

desc2.toUpperCase(); // "HI, GUYS.";
desc2.toLowerCase(); // "hi, guys.";

// 인덱스 추출
// 공백 포함
// 첫글자 인덱스만 추출
desc2.indexOf('Hi'); // 0
desc2.indexOf('guys'); // 4

// 주의
// if문의 조건문으로 사용할 때, 0번째 인덱스는 false로 인식
//if(desc2.indexOf('Hi')){
if(desc2.indexOf('Hi') > -1){ // 권장
    console.log('Hi가 포함된 문장');
};

// 문자열 추출
let desc3 = "abcdefg";

// 두번째 인자 없으면 끝까지
desc3.slice(2); // "cdefg"
desc3.slice(0,5); // "abcde"
// 음수는 끝에서부터 카운트
// 끝에서 두번째 글자까지
desc3.slice(2,-2); // "cde"

// 문자열 추출2
// slice와의 차이는 인자 두 개의 자리를 바꿔도 동작
// 음수는 0으로 인식
desc3.substring(2,5); // "cde"
desc3.substring(5,3); // "cde"

// 문자열 추출3
// 두번째 인자는 범위가 아닌 개수
desc3.substr(2,4); // "cdef"
desc3.substr(-4,2); // "de"

// 앞뒤 공백 제거
// 사용자로부터 입력 받을 때
let desc4 = " coding    ";
desc4.trim(); // "coding"

// n번 반복
let hello = "hello!!";
hello.repeat(3); // "hello!!hello!!hello!!"

// 문자열 비교
// 아스키 코드 기준
"a" < "c" // [97 < 99] true
// 아스키 코드 얻기
"a".codePointAt(0); // 97
// 아스키 코드로부터 문자 얻기
String.fromCodePoint(97); // "a"

//
// 사용 예시
//

let list = [
    "01. 들어가며",
    "02. JS의 역사",
    "03. 자료형",
    "04. 함수",
    "05. 배열",
];

let newList = [];

for(let i = 0; i < list.length; i++){
    newList.push(list[i].slice(4));
};

console.log(newList);

// 금칙어: 콜라
function hasCola(str){
    if(str.indexOf('콜라') > -1){ // 같은 코드: if(str.includes('콜라')){
        console.log('금칙어가 있습니다.');
    } else{
        console.log('통과');
    };
};

hasCola('와! 사이다가 짱이야.'); // 통과 (-1)
hasCola('와! 콜라가 짱이야.'); // 금칙어가 있습니다.
hasCola('콜라'); // 금칙어가 있습니다 (0)

// includes
// 문자가 있으면 true, 없으면 false