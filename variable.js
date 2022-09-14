// 이미 정의된 변수
let name = "Mike";
age = 30;

// 알림창
// alert(name);
// 콘솔 출력
// console.log(age);

// 앞서 정의된 변수이므로 에러
// let name = "google";
// let 제외하고 선언하면 재정의 가능
name = "google";

// 절대로 바뀌지 않는 상수(대문자로 정의)
const PI = 3.14;

// TIP
// 우선, const로 정의 후 바뀔 여지가 있는 변수만 let으로 선언

// let, const -> ES6에서 도입
// var -> ES6 이전 버전
// var와 let은 거의 유사한 개념

// var와 let의 차이
// var는 한 번 선언된 변수를 다시 선언할 수 있다
// let은 에러 발생
var hobby = 'football';
console.log(hobby); // 'football'

var hobby = 'game';
console.log(hobby); // 'game'

// var는 선언하기 전에 사용 가능(에러X) - 호이스팅
console.log(money); // undefined -> 선언은 되지만 할당은 안된다
var money = 3000;

// 호이스팅
// 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것처럼 행동

// Temporal Dead Zone(TDZ)
// let과 const도 호이스팅되지만 에러 발생
// TDZ 영역의 변수들은 사용 불가능
// 코드를 예측 가능하게 함으로써 버그를 줄일 수 있음
console.log(music) // TDZ
const music = "jazz"; // 함수 선언 및 할당
console.log(music); // 사용 가능

// 호이스팅은 스코프 단위로 작용
let age = 20; 

// 스코프(함수 내부)
function showAge() {
    console.log(age); // TDZ
    let age = 50; // error
};

showAge();

// 변수의 생성 과정
// 1. 선언 단계
// 2. 초기화 단계 - undefined를 할당해주는 단계
// 3. 할당 관계

// var는 선언 및 초기화가 동시에 이루어진다
// 따라서, 에러가 아닌 undefined를 가진다

// let은 선언 단계와 초기화 단계가 분리 되어 있다
// 호이스팅 되면서 선언 단계가 이루어지지만 초기화 단계는 실제 코드에 도달해야 이루어진다
// 따라서, 레퍼런스 에러가 발생한다

// const는 선언과 동시에 할당이 이루어져야 한다(선언+초기화+할당)
// let과 var는 값을 바꿀 수 있는 반면, const는 고정이다
/*
var gender;
gender = 'male';

let gender;
gender = 'male';

const gender; // error
gender = 'male';
*/

//
// 스코프
//

// 스코프 내에서 선언된 변수는 스코프 내에서만 유효(지역 변수)
// 외부에서 접근 불가

// var - 함수 스코프(function-scroped)
// let, const - 블록 스코프(block-scoped)
// 블록: 함수, if문, for문, while문, try/catch문 등

const number = 30;

if (number > 20){
    var pass = true; // let과 const는 불가능(블록 내부에서만 사용 가능)
};

console.log(pass); // true

function add(num1, num2){
    var result = num1 + num2;
};

add(2,3);

console.log(result); // error -> 함수 내부에서 선언되었으므로 함수 내부에서만 사용 가능