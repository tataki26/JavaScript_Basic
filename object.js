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