//
// 객체
//

// object = { key: value }
const superman = {
    name: 'clark',
    age: 33, // 수정, 이동, 삭제를 고려하여 마지막 쉼표 생략X
};

//
// 접근, 추가, 삭제
//

// 접근
superman.name
superman['age']

// 추가
superman.gender = 'male';
superman['hairColor'] = 'black';

// 삭제
delete superman.hairColor;

//
// 단축 프로퍼티
//

const heroName = 'Wayne'
const heroAge = 33;

const batman = {
    heroName, // heroName: heroName
    heroAge, // heroAge: heroAge
    gender: 'male',
};

console.log(batman);

/*
// 출력 결과
// [object Object]
{
    "heroName": "Wayne",
    "heroAge": 33,
    "gender": 'male'
}
*/

//
// in
//

// 프로퍼티 존재 여부 확인
superman.birthDay // undefined
'birthDay' in superman; // false
'age' in superman; // true

// for... in
for(let key in superman){
    console.log(key);
    console.log(superman[key]); // value
};

//
// 함수 + 객체
//

function makeObject(name, age){
    return {
        name, // name: name
        age, // age: age
        hobby: "football",
    }
};

const Mike = makeObject("Mike", 32);

console.log(Mike);

/*
// 출력 결과
// [object Object]
{
    "name": "Mike",
    "age": 32,
    "hobby": "football"
}
*/

console.log("age" in Mike); // true
console.log("birthDay" in Mike); // false

// 객체 in 예제
function isAdult(user){
    // 'age'가 user 객체에 없거나 user의 나이가 20살 미만이면, false
    if(!('age' in user) || user.age < 20){
        return false;
    }
    return true;
}

console.log(isAdult(Mike)); // true

const Jane = {
    name: 'Jane',
}

console.log(isAdult(Jane)); // false

// for.. in 예제
for(x in Mike){ // key 순회
    console.log(x); // "name" "Mike" "age" "32" "hobby" "football"
    console.log(Mike[x]); // 
}

const iName = 'tony';
const iAge = 42;

const ironman = {
    iName,
    iAge,
    fly: function(){ // method: 객체 프로퍼티로 할당 된 함수
        console.log("날아다닌다!");
    }
    /*
    // 같은 코드
    fly(){
        console.log("날아다닌다!");
    }
    */
};

ironman.fly();

//
// 객체와 메서드의 관계
//

/*
let user = {
    name: 'Mike',
    sayHello: function(){
        // console.log(`Hello, I'm ${user.name}`); // 권장X
        console.log(`Hello, I'm ${this.name}`);
    }
}

// 같은 사람을 다른 객체로 표현
let man = user;
// user.name으로 설정한 경우,
man.name = "Tom";

// user로 접근했음에도 이름이 바뀌어 버린다
console.log(user.name); // "Tom"

// boy를 null로 만들어 man으로만 접근하게 하면, 아예 에러가 뜬다
*/

// this는 실행하는 시점(런타임)에 결정됨
// 객체(boy or girl)
let sayHello = function(){
    console.log(`Hello, I'm ${this.name}`);
}

let boy = {
    name: 'Mike',
    sayHello,
};

let girl = {
    name: 'Jane',
    sayHello,
};

boy.sayHello();
girl.sayHello();

// 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않는다
// 따라서, 화살표 함수 내부에서 this를 사용하면 외부로부터 값을 가져온다
/*
let boy = {
    name: 'Mike',
    sayHello: () => {
        console.log(this);
    }
};

// this != boy
// this = 전역 객체
// 전역 객체: window(브라우저), gloabl(Node.js)
boy.sayHello();
*/

let woman = {
    name: 'Julia',
    sayThis: function(){
        console.log(this);
    }
};

woman.sayThis();

/*
// 출력 결과
// 객체를 반환한다
[object Object]
{
    "name": "Julia",
    "sayThis": "function () {\n     console.log(this);\n    }" 
}
*/

// 화살표 함수로 바꾸면 window 객체 반환
// 따라서, 메서드는 화살표 함수로 작성하지 않는 것을 권장

//
// computed property
//

let a = 'age';

const user = {
    name: 'Mike',
    [a]: 30, // 변수 a에 할당되는 값
    // 같은 코드
    // age: 30,
    [1+4]: 5,
    ["안녕"+"하세요"]: "Hello",
};

// 결과
// user
// { ... 5: 5, 안녕하세요: "Hello" }

let nm = "name";
let ag = "age";

const someone = {
    [nm]: 'Tom',
    [ag]: 24,
};

// 사용 예시
function makeObj(key, val){
    return {
        [key]: val,
    }
};

const obj = makeObj("나이", 33);

console.log(obj);

//
// methods - intermediate
//

// 객체 복제
const male = {
    name: 'Mike',
    age: 30,
};

// male에는 객체가 아닌 객체가 담긴 메모리 주소를 가지고 있다
// cloneMale의 프로퍼티를 바꾸면 male의 프로퍼티도 바뀜
// const cloneMale = male; [X]

// assign(초기값, 복제할 객체)
const newMale = Object.assign({}, male);
// {} + { name: 'Mike', age: 30 }
// { name: 'Tom' } -> key가 같은 경우, 기존 key로 유지('Mike')
// male != newMale
// newMale의 프로퍼티를 바꿔도 male의 프로퍼티는 그대로 유지됨

// 세 객체 하나로 합치기
const seller = {
    name: 'James',
};

const info1 = {
    age: 30,
};

const info2 = {
    gender: 'male',
};

// info2가 info1을 복제하고, 복제된 info1이 seller를 복제
Object.assign(seller, info1, info2);

// 결과
/*
{
    name: 'James',
    age: 30,
    gender: 'male',
}
*/


// 키 배열 반환
Object.keys(seller); // ["name", "age", "gender"]

// 값 배열 반환
Object.values(seller); // ["James', 30, "male"]

// 키/값 배열 반환
Object.entries(seller);

// 결과
/*
[
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"]
]
*/

// 키/값 배열을 객체로
const arr =
[
    ["name", "Mike"],
    ["age", 30],
    ["gender", "male"]
];

Object.fromEntries(arr);

// 결과
/*
{
    name: 'Mike',
    age: 30,
    gender: 'male',
}
*/