// function

function sayHello(name){
    console.log(`Hello, ${name}!`);
}

sayHello("Takityaki"); // Hello, Takityaki!
sayHello("Mark");
sayHello("Tom");

// 매개변수가 없는 함수
function showError(){
    alert('에러 발생!');
}

showError();

// 전역 변수
let msg = "welcome";
console.log(msg);

// 매개변수가 들어오지 않아도 실행될 수 있는 조건문 추가
function sayHello2(name){
    // 지역 변수
    // 함수 밖에서 사용 불가
    // 전역 변수의 간섭을 받지 않는다
    let msg = `Hello`; // 매개변수가 없으면(undefined) Hello만 실행
    if(name){
        // msg = `Hello, ${name}!`;
        msg += ', ' + name + '!';
    }
    console.log(msg);
}

sayHello2(); // Hello
sayHello2("Sam"); // Hello, Sam

/*
// 같은 코드 - or
function sayHello2(name){
    let newName = name || 'friend';
    let msg = `Hello, ${newName}!`;
    console.log(msg);
};

sayHello2(); // "Hello, friend!"
sayHello2("Sam"); // "Hello, Sam!"

// 같은 코드 - default
function sayHello2(name = 'friend'){ // 매개변수에 값이 들어오지 않으면 default 값으로 지정
    let msg = `Hello, ${newName}!`;
    console.log(msg);
};

sayHello2(); // "Hello, friend!"
sayHello2("Sam"); // "Hello, Sam!"
*/

console.log(msg); // welcome

let userName = "Mike";

// 매개변수로 받은 값은 복사된 후, 함수의 지역 변수가 된다
// 전역 변수는 관리가 어려우므로 함수 내부에서 지역 변수를 정의하는 것이 더 효율적이다
function sayHello3(userName){ 
    console.log(userName);
};

sayHello3(); // undefined
sayHello3('Jane'); // Jane

// return으로 값 반환
function add(num1, num2){
    return num1 + num2;
    alert('이 코드는 절대 실행되지 않습니다.'); // return에서 함수 종료
};

const result = add(2,3);
console.log(result); // 5

// return이 없는 함수는 undefined return
const errResult = showError();
console.log(errResult);

// 함수는 한 번에 한 작업에만 집중하도록 정의할 것

//
// 함수 표현식
//

/*
// 함수 선언문
// 어디서든 호출 가능
// 호이스팅(hoisting)
// 인터프리터 언어는 순차 실행
// 그러나 함수의 경우, 코드 실행 전 초기화 단계에서 선언된 함수를 모두 찾아 생성하므로 순서와 상관 없이 실행됨
sayHi(); // not error

function sayHi(){
    console.log('Hi');
}
*/

// 함수 표현식
// 이름 없는 함수를 정의한 후, 변수에 할당
// 코드에 도달하면 생성
// 생성이 된 후에야 실행 가능
// sayHi(); // error
let sayHi = function(){
    console.log('Hi');
}

sayHi(); // Hi

//
// 화살표 함수
//

// 1. 함수명 -> 변수
// 2. function 생략
// 3. 화살표로 실행문 가리킴
// 실행부가 return문 한 줄이거나 매개변수가 하나면 중괄호 생략 가능
let add = (num1, num2) => num1 + num2;

/*
// 같은 코드
function add(num1, num2){
    return num1 + num2;
};
*/

// 매개변수가 없는 함수라도 괄호는 생략할 수 없음
let showError = () => console.log('error!');

/*
// 같은 코드
let showError = function(){
    console.log('error!');
};
*/
