// 인수 전달
// JavaScript는 함수의 인자 개수에 민감하지 않다
// 선언한 인자보다 더 많은 인자 혹은 더 적은 인자를 넘기더라도 에러가 나지 않는다
// 더 많은 인자를 넘기면 선언한 인자 수만큼의 인자만 사용된다
// 더 적은 인자를 넘기면 undefined가 된다

//
// arguments
//

// 1. 함수로 넘어 온 모든 인자에 접근
// 2. 함수 내에서 이용 가능한 지역 변수
// 3. length / index 사용 가능
// 4. Array 형태의 객체
// 5. 배열의 내장 메서드 없음(forEach[x], map[X])
function showName(name){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
};

showName('Mike','Tom'); // 2 'Mike' 'Tom'

//
// 나머지 매개변수(Rest Parameter) 
//

// 정해지지 않은 개수의 인자를 배열로 나타낼 수 있다
// ES6 환경에서 사용 가능
function showName(...names){ // names: 배열
    console.log(names);
};

showName(); // []: undefined[X] -> 빈 배열
showName('Mike'); // ['Mike']
showName('Mike', 'Tom'); // ['Mike', 'Tom']

// 사용 예시
// 전달 받은 모든 수 더하기
function add(...numbers) {
    let sum = 0;
    // 배열이므로 forEach 사용 가능
    numbers.forEach((number) => (sum += number));
    // 같은 코드
    /*
    let sum = numbers.reduce((prev, cur) => prev + cur);
    */
    console.log(sum);
};

add(1,2,3); // ok
add(1,2,3,4,5,6,7); // ok

// user 객체를 만들어 주는 생성자 함수
// 사용자마다 skill의 개수가 다르다
// 나머지 매개변수는 항상 마지막 위치에 있어야 한다
function User(name, age, ...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
};

const user1 = new User("Mike", 30, "html", "css");
const user2 = new User("Tom", 20, "JS", "React", "Node.js");
const user3 = new User("Jane", 10, "English");

//
// 전개 구문(Spread syntax)
//

// 배열
let arr1 = [1,2,3];
let arr2 = [4,5,6];

let result = [...arr1, ...arr2]; // 배열 원소 풀어 쓰기
console.log(result); // [1,2,3,4,5,6]

result = [0, ...arr1, ...arr2, 7, 8, 9];
console.log(result); // [0,1,2,3,4,5,6,7,8,9]

// 객체
let user = {name: 'Mike'};
let mike = {...user, age:30}; // {name: "Mike", age: 30}

// 복제
let arr3 = [...arr1]; // [1,2,3]
let copiedMike = {...mike}; // {name: "Mike", age: 30}

// 원본에 영향을 주지 않는다
copiedMike.name = "Tom";

console.log(mike.name); // "Mike"
console.log(copiedMike.name); // "Tom"

// 사용 예제
// arr1를 [4,5,6,1,2,3]으로
arr1 = [...arr2, ...arr1];

// 같은 코드
/*
arr2.reverse().forEach((num) => {
    arr1.unshift(num);
});
*/

// user 객체 완성하기
let info = {age: 30};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

user = {
    ...user,
    ...info,
    skills: [...fe, ...lang],
};

// 같은 코드
/*
user = Object.assign({}, user, info, {
    skills: [],
});

fe.forEach((item) => {
    user.skills.push(item);
});

lang.forEach((item) => {
    user.skills.push(item);
});
*/