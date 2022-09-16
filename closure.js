// 어휘적 환경(Lexical Environment)
// 변수의 유효 범위 지정(Lexical scoping)
// lexical: 어휘적 범위 지정 과정에서 변수가 어디에 사용 가능한지 알기 위해 그 변수가 소스코드 내 어디에서 선언되었는지 고려하는 것
// 중첩된 함수는 외부 범위에서 선언한 변수에도 접근할 수 있다

// 코드가 실행되면 스크립트 내에서 선언한 변수들이 Lexical 환경에 올라간다

            // [전역 Lexical]
            // 코드 최상단, 실행될 코드의 윗 부분
            // let 변수는 초기화가 되지 않아 사용 불가
            // 함수 선언문은 초기화가 되어 바로 사용 가능

let one;    // [전역 Lexical] let 변수 사용 가능(undefined)
one = 1;

function addOne(num) {
    console.log(one+num); // one은 외부에서 찾음
};

addOne(5);  // [내부 Lexical] 함수가 실행되는 순간 생성

// 내부 Lexical 환경은 외부 Lexical 환경에 대한 참조를 가진다
// 코드에서 변수를 찾을 때, 내부에 없으면 외부, 외부에도 없으면 전역으로 범위를 확대하여 찾는다

// 코드 실행 시,
// makeAdder과 add3은 Lexical 환경에 올라간다
// add3는 초기화 되지 않았으므로 사용 불가
function makeAdder(x){ 
    return function(y){ // [add3 = function] // y를 가지고 있고 상위 함수인 makeAdder의 매개 변수 x에 접근 가능
        return x + y; // 내부 함수가 가지고 있지 않은 외부 함수(부모)의 변수를 사용할 수 있다
    };  
};

const add3 = makeAdder(3); // [closure] makeAdder의 Lexical 환경 생성 [x = 3] // x 찾음
console.log(add3(2)); // makeAdder 내부 익명 함수의 Lexical 환경 생성 [y = 2] // 맨 처음 y와 x를 찾는 곳
// add3 함수가 생성된 이후에도 상위 함수인 makeAdder의 x에 접근 가능

// closure
// 함수와 Lexical 환경의 조합
// 함수가 생성될 당시의 외부 변수를 기억하여 함수 생성 이후에도 계속 접근 가능한 기능
// 외부 함수가 소멸된 이후에도 내부 함수가 외부 함수의 변수에 접근 가능
const add10 = makeAdder(10); // [closure] makeAdder 10이 호출되어도 add3에는 변화가 없다 [x = 10]
// add10과 add3은 서로 다른 환경을 가진다
console.log(add10(5)); // 15 
console.log(add3(1)); // 4

function makeCounter() {
    let num = 0; // 은닉화 성공

    return function() {
        return num++; // 외부 함수의 변수
    };
};

let counter = makeCounter(); // counter에 makeCounter가 return하는 함수가 들어감

console.log(counter()); // 0 // 숫자 수정 불가능
console.log(counter()); // 1
console.log(counter()); // 2

// closure가 독특한 이유
// 몇몇 프로그래밍 언어에서 함수 안의 지역 변수는 그 함수가 실행되는 동안에만 존재한다
// 외부 함수의 실행이 끝나면(내부 함수가 리턴되고 나면) 외부 함수의 변수에 더이상 접근할 수 없다는 예상이 일반적이다
// 그러나, JavaScript에서는 함수를 리턴하고 리턴하는 함수가 클로저를 형성한다
// lexical 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다
// counter는 makeCounter가 실행될 때 생성된 내부 함수의 인스턴스에 대한 참조이다
// 내부 함수의 인스턴스는 변수 num이 있는 어휘적 환경에 대한 참조를 유지한다
// 따라서, counter가 호출될 때 변수 num은 사용할 수 있는 상태로 남는다

// closure가 유용한 이유
// 특정 데이터(어휘적 환경)와 그 데이터를 조작하는 함수를 연관시키는 기능
// 객체가 특정 데이터와 (그 객체의 속성) 하나 혹은 그 이상의 메서드를 연관시킨다는 점에서 OOP와 유사한 개념
// 오직 하나의 메서드를 가지고 있는 객체를 일반적으로 사용하는 모든 곳에 closure 사용 가능
// 이벤트(콜백) 기반의 웹 환경에서 유용