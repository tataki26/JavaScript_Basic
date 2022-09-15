//
// 배열
//

// 배열: 순서가 있는 리스트
let students = ['철수', '영희', '영수'];

// 인덱스로 접근하여 값 수정 가능
students[0] = '민수';

// 객체와 함수도 배열에 포함될 수 있다
// 하나의 배열 속 데이터들의 타입이 달라도 정의 가능
let arr = [
    '민수',
    3,
    false,
    {
        name: 'Mike',
        age: 30,
    },
    function(){
        console.log('Test');
    }
];

//
// 배열 method
//

// 배열의 길이 반환
console.log(students.length);

// 배열 끝에 추가
// 여러 개의 원소 추가 가능
students.push('민지');
console.log(students); // ['철수', '영희', '영수', '민지']

// 배열 끝 요소 제거
students.pop();
console.log(students); // ['철수', '영희', '영수']

// 배열 앞에 추가
students.unshift('하니', '해린');
students.shift();
console.log(students); // ['해린', '철수', '영희', '영수']

//
// 배열 반복문
//

for(let idx = 0; idx < students.length; idx++){
    console.log(students[idx]); // "해린" "철수" "영희" "영수"
};

// for... of
// for... in(객체 순회)과 헷갈리지 말 것
// 배열에서도 사용은 가능하나 장점보다는 단점이 더 많으므로 권장X
for(let student of students){
    console.log(student);
};

//
// 배열 method 2
//

// 배열의 특정 요소 지움
// 두번째 인자는 지울 요소 개수
let arry = [1,2,3,4,5];
arry.splice(1,2); // [1,4,5]

// 특정 요소 지우고 추가
// 세번째 인자부터 추가할 요소
arry.splice(1,3,100,200); // [1,100,200,5]
// 두번째 인자가 0이면 추가만 진행
arry.splice(1,0,1.5); // [1,1.5,2,3,4,5]

// splice의 반환값은 삭제된 요소
let result = arry.splice(1,2); // [2,3]

// slice는 문자열과 동일
// 인자가 없으면 배열 복사
let arry2 = arry.slice(); // [1,2,3,4,5]

// 합쳐서 새로운 배열 반환
let simpleArr = [1,2];

simpleArr.concat([3,4]); // [1,2,3,4]
// 인자 두 개 이상 가능 >> 계속 이어 붙임
simpleArr.concat([3,4],[5,6]); // [1,2,3,4,5,6]
// 배열이 아닌 수를 넘겨도 가능
simpleArr.concat(3,4,[5,6]);

// 배열 반복
let users = ['Mike','Tom', 'Jane'];

// .forEach((element, index, arr) => { });
// 보통 element와 index까지만 사용
users.forEach((name, index) => {
    console.log(`${index + 1}. ${name}`);
});

// 인덱스 추출하기
let arr3 = [1,2,3,4,5,1,2,3];
arr3.indexOf(3); // 2 >> 첫번째 요소의 인덱스만 추출
// 두번째 인자는 시작 위치
// 따라서, 마지막 3의 인덱스를 추출
arr3.indexOf(3,3); // 7
// 끝에서부터 탐색
arr3.lastIndexOf(3); // 7

// includes: 문자열과 동일

// find, findIndex
// includes, indexOf와 같은 기능
// 함수를 인자로 넘길 수 있어 복잡한 조건 추가 가능
// 첫번째 true 값만 반환하고 끝 / 해당하는 index 반환
// 만약 없으면 undefined 반환 / -1 반환
const rst = arry.find((item) => {
    return item % 2 === 0; // 2 (하나만 찾고 끝)
});

// 객체의 경우, indexOf로 찾기 어려움
// find 활용
let userList = [
    { name: "Mike", age: 30 },
    { name: "Jane", age: 27 },
    { name: "Tom", age: 10 },
];

const young = userList.find((user) => {
    if(user.age < 20){
        return true;
    };
    return false;
}); // {name: "Tom", age: 10}


const youngIdx = userList.findIdx((user) => {
    if(user.age < 20){
        return true;
    };
    return false;
}); // 2

// 만족하는 모든 요소를 배열로 반환
// find와 사용법 동일
const rst2 = arry.filter((item) => {
    return item % 2 === 0; // 짝수만 반환 [2,4]
});

// 역순으로 재정렬
arry.reverse(); // [5,4,3,2,1]

// 함수를 받아 특정 기능 시행 후, 새로운 배열 반환
let newUserList = userList.map((user, idx) => {
    return Object.assign({}, user, {
        id: idx + 1,
        isAdult: user.age > 19,
    });
});

// 결과
/*
[
    { name: "Mike", age: 30, id: 1, isAdult: true },
    { name: "Jane", age: 27, id: 2, isAdult: true },
    { name: "Tom", age: 10, id: 3, isAdult: false },
];
*/

// 배열을 합쳐서 문자열 만들기
let msgArr = ["안녕", "나는", "철수야"];
// join의 인자는 구분자
// 인자를 넘기지 않으면 쉼표로 구분
let msg = msgArr.join(" "); // 안녕 나는 철수야

// 문자열을 나눠서 배열 만들기
const userArr = "Mike,Jane,Tom,Tony";
const rstArr = userArr.split(","); // ["Mike","Jane","Tom","Tony"]
// 인자로 ""을 넘기는 경우, 글자 하나씩 배열에 추가: ["M","i","k","e",",",...]

// 배열인지 확인
// typeof를 사용할 경우, object로 나옴
Array.isArray(arr); // true