// Generator
// 함수의 실행을 중간에 멈췄다가 제거할 수 있는 기능
// 다른 작업을 하다가 다시 돌아와서 next() 해주면 진행이 멈췄던 부분부터 이어서 실행

// function에 * 붙이고 내부에 yield 키워드 사용
// yield에서 함수의 실행 멈춤
function* fn(){
    try{
        console.log(1);
        yield 1;
        console.log(2);
        yield 2;
        console.log(3);
        console.log(4);
        yield 3; 
        return "finish";
    } catch(e) {
        console.log(e);
    }
};

// generator 객체 반환
const a = fn();

// next 메서드
// 가장 가까운 yield문을 만날 때까지 실행되고 data 객체 반환
// yield 옆 값을 정의하지 않으면 undefined
// done: 함수 실행이 끝났는지 여부
a.next(); // 1 { value: 1(yield 옆 값), done: false } 
a.next(); // 2 { value: 2 done: false } 

/*
// return 메서드
a.return('END'); // 바로 종료 { value: "END", done: true }
a.next(); // { value: undefined, done: true }
*/

/*
// throw 메서드
a.throw(new Error('err')); // Error: err { value: undefined, done: true }
a.next(); // { value: undefined, done: true }
*/

a.next(); // 3 4 { value: 3, done: false } 
a.next(); // { value: "finish", done: true }
a.next(); // { value: undefined, done: true }

//
// iterable, iterator
//

// iterable
// Symbol.iterator 메서드가 있다
// Symbol.iterator는 iterator를 반환해야 한다

// iterator
// next 메서드를 가진다
// next 메서드는 value와 done 속성을 가진 객체를 반환한다
// 작업이 끝나면 done은 true가 된다

// generator는 iterator이면서 iterable

// 배열과 iterator
// 배열은 반복 가능한 객체
const arr = [1,2,3,4,5];
const it = arr[Symbol.iterator]();

it.next(); // { value: 1, done: false }
it.next(); // { value: 2, done: false }
it.next(); // { value: 3, done: false }

// iterable은 for문을 통해 순회 가능하다
for(let num of arr){
    console.log(num);
};

function* fn() {
    yield 4;
    yield 5;
    yield 6;
}

const b = fn();

// generator에 Symbol.iterator를 실행한 값 = generator 자신
// generator는 iterator 객체
b[Symbol.iterator]() === b; // true

// for of를 시작하면 Symbol.iterator를 호출하고 없으면 error 발생
// 반환된 iterator에 next를 실행하면서 true가 될 때까지 반복
for(let num of a){
    console.log(num);
}; // 4 5 6

// 문자열도 iterable
const str = 'hello';
const xx = str[Symbol.iterator];

xx.next(); // { value: "h", done: false }
xx.next(); // { value: "e", done: false }

for(let s of xx){
    console.log(s);
}; // h e l l o

// next 메서드에 인자 전달하기
// 외부로부터 값 입력 받기
function* fn(){
    const num1 = yield "첫번째 숫자를 입력해주세요";
    console.log(num1);

    const num2 = yield "두번째 숫자를 입력해주세요";
    console.log(num2);

    return num1 + num2;
};

const c = fn();

c.next(); // { value: "첫번째 숫자를 입력해주세요", done: false }
// 인자 num1에 저장
c.next(2); // 2 { value: "두번째 숫자를 입력해주세요", done: false }
c.next(4); // 4 { value: 6, done: true }

// generator는 값을 미리 만들어 두지 않는다
// 필요한 값만 그때그때 생성한다
// 필요한 순간까지 연산을 미룰 수 있다
// 메모리 관리 효율 측면에서 좋다
// while문을 활용해도 브라우저가 뻗지 않는다
// next로 호출할 때, 값을 주기 때문
function* fn(){
    let index = 0;
    while(true) {
        yield index++;
    };
};

const d = fn(); // { value: 2, done: false }

d.next();

// yield*
// 다른 generator 불러오기
// 반복 가능한 모든 객체가 올 수 있다
function* gen1(){
    yield "W";
    yield "o";
    yield "r";
    yield "l";
    yield "d";
};

function* gen2(){
    yield "Hello";
    yield* gen1(); // 다른 generator 호출
    yield "!";
};

// 구조 분해 할당
// for... of와 마찬가지로 done이 true가 될 때까지 값을 펼쳐주는 역할
console.log(...gen2()); // Hello, W o r l d !