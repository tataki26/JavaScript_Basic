// 동등 연산자
const a = 1;
const b = "1";

console.log(a == b); // true -> 오동작

// 일치 연산자(타입까지 비교)
console.log(a === b);

//
// if else
//

const age = 19;

if(age > 19){
    console.log('환영합니다!');
} else if(age===19){
    console.log('수능 잘 보세요!');
} else{
    console.log('안녕히 가세요!');
}

//
// and, or, not
//

// or는 첫번째 true를 발견하는 즉시 평가 중단
// and는 첫번째 false를 발견하는 즉시 평가 중단
// 따라서, 평가가 분명한 조건을 앞에 배치하는 것이 유리

const userName = "Mike";
const userAge = 30;

if(userName === 'Tom' || userAge > 19){
    console.log('통과')
} else{
    console.log('돌아가!');
}; // 통과

if(userName === 'Tom' && userAge > 19){
    console.log('통과')
} else{
    console.log('돌아가!');
}; // 돌아가

// not
// 나이를 입력 받고 성인이 아니면 '돌아가!' 알림
const age2 = prompt('나이를 입력하시오.');
const isAdult = age2 > 19;

if(!isAdult){
    console.log('돌아가!');
}

// 논리 연산자 우선순위
// 남자이고, 이름이 Mike이거나, 성인이면 통과
const gender = "male";
const name2 = "Mike";

if(gender === "female" && name2 === "Mike" || isAdult){
    console.log('통과');
} else{
    console.log('돌아가!');
} // 통과

// and가 or보다 우선순위가 높음
// (false || true)
// 첫 조건의 결과가 false지만 마지막 조건의 결과가 true이므로 true
// 의도한대로 하려면 or 조건문 먼저 실행
// if(gender === "female" && (name2 === "Mike" || isAdult))