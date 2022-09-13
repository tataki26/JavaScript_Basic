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