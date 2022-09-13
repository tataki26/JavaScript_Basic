//
// 문자형 String
//

// 큰따옴표, 작은따옴표, `로 표기 가능
let nickName = 'Takityaki';

// `은 문자열 내부의 변수를 표현할 때 사용
// ${변수}: 문자열 내부에서 변수 사용 가능
const msg = `My name is ${nickName}`;

console.log(msg);

const ageMsg = `나는 ${20+8}살 입니다.`

console.log(ageMsg);

//
// 숫자형 Number
//

const age = 20;

// 사칙연산
console.log(age+8);
console.log(age-10);
console.log(age*2);
console.log(age/4);
console.log(age%6); // 나머지

// 숫자를 0으로 나누면,
const x = 1/0;
console.log(x); // Infinity(무한대)

const str = 'hey';
const y = str/2;

console.log(y); // NaN(Not a number)

//
// Boolean
//

const a = true;
const b = false;

console.log(nickName == 'Takityaki'); // true
console.log(age > 40); // false

//
// null & undefined
//

// null: 존재하지 않는 값
// undefined: 값이 할당되지 않음
let c;
console.log(c); // undefined

let user = null;
console.log(null); // null


//
// typeof 연산자
//

// typeof: 변수의 type을 알 수 있음
// 다른 개발자의 코드를 사용할 때
// API 통신을 통해 받아온 데이터를 사용할 때
console.log(typeof 3); // "number"
console.log(typeof nickName); // "string"
console.log(typeof true); // "boolean"
console.log(typeof "xxx"); // "string"
console.log(typeof null); // "object" (객체형) *** null은 엄밀히 따지면 객체는 아님(초기 개발 이슈)
console.log(typeof undefined); // "undefined"