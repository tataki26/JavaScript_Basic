//
// toString()
//

// 10진수 -> 2진수/16진수
let num = 10;

num.toString(); // "10"
num.toString(2); // 2진수: "1010"

let num2 = 255;
num2.toString(16); // 16진수: "ff"

//
// MATH
//

console.log(Math.PI); // 3.141592653589793

// 올림
let num3 = 5.1;
let num4 = 5.7;

Math.ceil(num3); // 6
Math.ceil(num4); // 6

// 내림
Math.floor(num3); // 5
Math.floor(num4); // 5

// 반올림
Math.round(num3); // 5
Math.round(num4); // 6

// 소숫점 자릿수
let userRate = 30.1234;

// 소수점 둘째자리까지 표현(셋째자리에서 반올림)
// 1. userRate * 100
// 2. Math.round(userRate * 100)
// 3. Math.round(userRate * 100) / 100

userRate.toFixed(2); // "30.12"
userRate.toFixed(0); // "30"
userRate.toFixed(6); // "30.123400"

// 문자열로 반환 >> 숫자형으로 변환
Number(userRate.toFixed(2)); // 30.12

// NaN 판단하기
let x = Number('x'); // NaN

// 오직 isNaN() 함수로만 가능
isNaN(x); // true
isNaN(3); // false

x == NaN // false
x === NaN // false
// 자기 자신과도 다르다고 인식
NaN == NaN // false

// 인식할 수 있는 범위까지 숫자형 변환
let margin = '10px';

Number(margin); // NaN
parseInt(margin); // 10

// 문자로 시작하면 NaN
let redColor = 'f3';
parseInt(redColor); // NaN

// 두번째 인자는 진수
parseInt(redColor, 16); // 243
parseInt('11', 2) // 3

// 인식할 수 있는 범위까지 소수 변환
let padding = '18.5%';

parseInt(padding); // 18 >> 정수만 반환
parseFloat(padding); // 18.5

// 0과 1 사이의 랜덤 수 뽑기
Math.random(); // 0.26027823967117425

// 응용 - 1과 100 사이의 램덤 수 뽑기
// 1. Math.random(); // 0.6789
// 2. Math.random() * 100; // 67.89
// 랜덤 수는 곱하는 수를 넘지 못한다
// 100을 곱하면 0에서 100 사이의 수를 건질 수 있다(1 * 100)
// 3. Math.floor(Math.random() * 100); // 67
// 4. Math.floor(Math.random() * 100) + 1 // 68
// 버림을 했을 때 0이 나올 수 있기 때문에
// 최솟값 1을 맞추기 위해 1을 더한다

// 최댓값과 최솟값
Math.max(1,4,-1,5,10,9,5.54); // 10
Math.min(1,4,-1,5,10,9,5.54); // -1

// 절대값
Math.abs(-1); // 1

// 제곱
Math.pow(2,10); // 1024

// 제곱근
Math.sqrt(16); // 4