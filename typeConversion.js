// String: 문자형으로 변환
// Number: 숫자형으로 변환
// Boolean: 불린형으로 변환

// 문자형 + 숫자형 = 문자형
const mathScore = prompt("수학 점수는?");
const engScore = prompt("영어 점수는?");
const result = (mathScore + engScore) - 2;

// 문자형 연산(두 문자형이 더해짐)
// 의도하지 않은 결과
console.log(result);

//
// Number
//

// 자동 형변환
// 덧셈을 제외한 나머지 사칙 연산은 자동 형변환
// 자동 형변환은 예기치 않은 에러를 찾기 어렵다
// 따라서, 의도를 가지고 원하는 타입으로 형변환(명시적 형변환)을 진행해야 한다
const result2 = Number(mathScore) + Number(engScore);

// 문자열에 글자가 있으면 숫자형이 아닌 NaN이 된다
console.log(Number("1234abc"));

console.log(
    Number(true), // 1
    Number(false), // 0
    Number(null), // 0, 사용자가 prompt 창에서 취소를 누른 경우
    Number(undefined) // NaN,
);

//
// String
// 

console.log(
    String(3),
    String(true),
    String(false),
    String(null),
    String(undefined)
);

//
// Boolean
//

// false가 되는 값
// 숫자 0
// 빈 문자열
// null
// undefined
// NaN
console.log(Boolean(NaN));

// true가 되는 값
// false가 되는 값을 제외한 모든 값
console.log(Boolean("!23"));

console.log(
    Boolean(0), // false
    Boolean('0'), // true
    Boolean(''), // false
    Boolean(' ') // true
);