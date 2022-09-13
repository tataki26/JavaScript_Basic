// 나머지 연산자 %
// 1. 홀수/짝수
// 2. 특정 수보다 작은 값
console.log(x%5); // 0 ~ 4 사이의 값만 반환

// 거듭 제곱 연산자 **
const num = 2 ** 3;
console.log(num); // 8

// 기본 수학 연산자 우선 순위를 따름
// 곱셈, 나눗셈이 덧셈, 뺄셈보다 우선

// 연산자 줄여 쓰기
let number = 10;
console.log(
    number+=1,
    number-=2,
    number*=3,
    number/=4,
    number%=5
);

// 증가 연산자, 감소 연산자
let numnum = 11;
// console.log(numnum++); // 11
console.log(++numnum); // 12
console.log(--numnum); // 11