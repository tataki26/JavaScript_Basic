// 구조 분해 할당
// 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식

//
// 배열 구조 분해
//

// 첫번째 방법
let [x,y] = [1,2];

console.log(x); // 1
console.log(y); // 2

let users = ['Mike', 'Tom', 'Jane'];

let [user1, user2, user3] = users;

// 같은 코드
/*
let user1 = users[0];
let user2 = users[1];
let user3 = users[2];
*/

// 두번째 방법 - split
let str = "Mike-Tom-Jane";

let [child1, child2, child3] = str.split('-');

// 기본값 지정
// 값을 할당하지 않으면 undefined
// let [a,b,c] = [1,2];
// 따라서, 사전에 기본값을 지정한다
let [a=3, b=4, c=5] = [1,2]; // a = 1, b = 2, c = 5

// 일부 반환값 무시
let [student1, , student2] = ['Mike', 'Tom', 'Jane', 'Tony'];
// 공백에 해당하는 인덱스의 값 무시
// 변수가 없는 값 무시
// 결과: student1 = 'Mike', student2 = 'Jane'

// 바꿔치기
/*
let d = 1;
let e = 2;
let f = d; // 임시 저장
d = e;
e = f; 
*/

// 같은 코드
[d, e] = [e, d];

//
// 객체 구조 분해
// 

let boy = {name: 'Mike', age: 17};

let {name, age} = boy; // name = 'Mike' age = 17
// 같은 코드
/*
let name = boy.name;
let age = boy.age;
*/
// 순서를 바꿔도 동일하게 동작(배열 구조 분해와의 차이점)
// let {age, name} = boy;

// 새로운 변수 이름으로 할당 가능
let {name: boyName, age: boyAge} = boy; // boyName = 'Mike' boyAge = 17

// 기본값 지정
// undefined인 경우에만 기본값이 작용
// 이미 값이 지정된 경우에는 지정된 값으로 할당
let { hisName, hisAge, hisGender = 'male'} = boy; 