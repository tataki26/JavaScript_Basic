// property key: 문자형
const obj = {
    1: '1입니다',
    false: '거짓',
};

Object.keys(obj); // ["1", "false"] -> 문자형으로 반환

// 접근 시에도 문자형으로 접근
/*
obj['1']
obj['false']
*/

//
// symbol
//

// 유일성 보장
// 유일한 식별자를 만들 때 사용
// new를 붙이지 않는다(String, Number, Boolean 같은 래퍼 객체를 생성하는 생성자 함수와의 차이점)
const a = Symbol();
const b = Symbol();

a === b; // false
a == b; // false

// Symbol 함수의 문자열 인자는 Symbol 값에 대한 description(주석)
// 디버깅 용도로만 사용(이름표)되며, Symbol 값 생성에 영향을 미치지 않음
const id = Symbol('id');
const id2 = Symbol('id');

id === id2; // false
id == id2; // false

const user = {
    name: 'Mike',
    age: 30,
    [id]: 'myid', // Symbol('id'): 'myid'
};

// 결과
// { name: 'Mike', age: 30, Symbol(id): "myid" }
// user[id] --> "myid"

// Symbol 함수로 만들어진 Symbol 값은 외부에 노출되지 않음
// object 관련 method와 for... in에서 symbol key는 볼 수 없음
Object.keys(user); // ["name", "age"]
Object.values(user); // ["Mike", 30]

// 특정 객체에 원본 데이터는 건드리지 않고 속성 추가 가능
const boy = {
    name: 'Tom',
    age: 25,
};

const pk = Symbol('pk');
boy[pk] = 'mypk';

// 다른 사람이 만든 객체에 자기 자신이 정의한 속성을 추가하여 덮어쓰면 안 됨
// boy.name = 'myname'; [X]
// 쉽게 정의할 수 없는 형태의 key를 만드는 것도 권장하지 않음
// boy.a_key_no_one_used = 'what'; [X]
// 이름 충돌 위험이 없는 객체의 유일한 property key를 만들고 싶을 때 Symbol 사용

// 전역 심볼(Symbol.for())
// 1. 하나의 symbol만 보장 받을 수 있음
// 2. 없으면 만들고 있으면 가져온다(전역으로 존재하는 global symbol table)
// 3. Symbol 함수는 매번 다른 Symbol 값 생성
// 4. Symbol.for 메서드는 하나를 생성한 뒤 여러 모듈이 키를 통해 같은 Symbol 공유
// 5. 코드 어디에서든 사용 가능
// 6. Symbol.for 메서드를 통해 생성된 Symbol 값은 반드시 key를 가지지만
// 7. Symbol 함수를 통해 생성된 Symbol 값은 키가 없다

// 전역 Symbol 레지스트리에 id라는 key로 저장된 Symbol이 없으면 새로운 Symbol 생성
const id3 = Symbol.for('id');
const id4 = Symbol.for('id');

id3 === id4; // true

// key 이름 얻기(from global symbol table)
Symbol.keyFor(id3); // "id"

// 전역 심볼이 아닌 경우(일반 심볼)에는 description 사용
const id5 = Symbol('id입니다.');
id.description; // "id입니다."

// 숨겨진 Symbol key 보는 법
Object.getOwnPropertySymbols(boy); // [Symbol(pk)]

// 객체와 함께 숨겨진 Symbol key 보기
Reflect.ownKeys(boy); // ["name", "age", Symbol(pk)]

//
// 사용 예시
//

// 다른 개발자가 만들어 놓은 객체
const girl = {
    name: 'Nana',
    age: 18,
};

// 내가 작업
// girl.showName = function () {};
// 결과
// Her showName is function() {}. => key와 value가 그대로 노출

// 사용자가 접속하면 보는 메세지
for (let key in girl) {
    console.log(`Her ${key} is ${girl[key]}.`);
};

const showName = Symbol("show name");
girl[showName] = function () { // girl['showName'] (key) != girl[showName] (Symbol)
    console.log(this.name);
};
// 결과
// 사용자 화면에서 볼 수 없음
// 메서드는 정상 동작
girl[showName](); // "Nana"

// JavaScript 객체의 내부 필드는 기본적으로 모두 public
// 누구든 내부 함수의 값을 덮어 쓸 수 있다
// 다른 작업자가 기존 코드의 내부를 모르고 같은 이름의 변수를 선언하여 오동작 시킬 수 있음
// 따라서, Symbol을 통해 숨김 처리(private 필드)

// 결론
// 위 사례에서 showName의 메서드를 선언하더라도 Symbol로 정의한 showName은 영향을 받지 않는다
// 일반 변수를 사용하면 key와 value가 그대로 노출될 위험이 있으므로
// Symbol을 통해 유일한 식별자를 생성하여
// 다른 사람이 같은 이름의 변수를 선언하더라도 고유한 식별자에 영향을 주지 않도록 한다