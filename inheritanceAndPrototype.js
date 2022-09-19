// hasOwnProperty
// 객체가 해당 Property를 가지고 있는지 여부
const user = { name: 'Mike' };

user.hasOwnProperty('name'); // true
user.hasOwnProperty('age'); // false

// Prototype
// __proto__ 객체
// 객체에서 property를 읽으려 하는데 없으면 __proto__에서 찾는다

const user2 = { 
    name: 'Jane',
    hasOwnProperty: function() {
        console.log('haha');
    },
};

// 객체에 property가 있으면 탐색을 멈춘다
// 없을 때만 prototype에서 찾는다
user2.hasOwnProperty(); // haha

//
// 상속
//

/*
// 반복되는 코드
const bmw = {
    color: "red",
    wheels: 4,
    navigation: 1,
    drive() {
        console.log("drive..");
    },
};

const benz = {
    color: "black",
    wheels: 4,
    drive() {
        console.log("drive..");
    },
};

const audi = {
    color: "blue",
    wheels: 4,
    drive() {
        console.log("drive..");
    },
};
*/

// 상위 객체
const car = {
    wheels: 4,
    drive() {
        console.log("drive..");
    },
};

const bmw = {
    color: "red",
    navigation: 1,
};

const benz = {
    color: "black",
};

const audi = {
    color: "blue",
};

// car가 나머지의 prototype이 된다
// car의 상속
bmw.__proto__ = car;
benz.__proto__ = car;
audi.__proto__ = car;

// bmw 내부에서 wheels를 찾고 없으면
// prototype인 car에서 찾는다
bmw.wheels; // 4

// 상속은 이어진다
const x5 = {
    color: "white",
    name: "x5",
};

// x5가 bmw를 상속 받음
x5.__proto__ = bmw;

// Prototype Chain
// 상속 받은 객체보다 더 상위 객체의 property까지 접근 가능
x5.wheels // 4

// 프로퍼티 출력하기
for(p in x5){
    console.log(p);
};

// 결과
// 상속 받은 모든 프로퍼티 출력
/*
"color"
"name"
"navigation"
"wheels"
"drive"
*/

// keys나 values에는 상속 받지 않은 고유 프로퍼티만 출력
Object.keys(x5); // ["color","name"]
Object.values(x5); // ["white","x5"]

// 상속된 프로퍼티 구분해서 출력하기
for(p in x5){
    if(x5.hasOwnProperty(p)){
        console.log('o: ',p);
    } else{
        console.log('x: ',p);
    };
};

// 결과
/*
"o: color"
"o: name"
"x: navigation"
"x: wheels"
"x: drive"
*/

// with 생성자 함수
/*
const Bmw = function (color) {
    this.color = color;
    this.wheels = 4;
    this.drive = function () {
        console.log("drive..");
    };
};
*/

/*
const car = {
    wheels: 4,
    drive() {
        console.log('drive..');
    },
};
*/

// 1
// 공통 부분은 car 객체로 빼기
const Bmw = function(color){
    this.color = color;
};

// 2
// 생성자 함수가 생성하는 객체에 __proto__를 설정한다
// car 객체를 선언할 필요가 없다
// 중복 코드를 줄일 수 있다
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function(){
    console.log("drive...");
}

// 프로토타입 추가
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function(){
    console.log("STOP!!");
};

// 생성자 함수로 만들어진 인스턴스 객체에 존재하는 프로퍼티
z4.constructor === Bmw; // true

/*
// 같은 코드
Bmw.prototype = {
    constructor: Bmw, // 수동으로 명시해주면 .constructor >> true
    wheels: 4,
    drive() {
        console.log("drive..");
    },
    navigation: 1,
    stop(){
        console.log("STOP!!");
    },
};
*/

// 그러나 위와 같은 방식을 사용할 경우 false가 된다
z4.constructor === Bmw; // false

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

// x5.__proto__ = car;
// z4.__proto__ = car;

// Bmw를 통해 z4를 만들었으므로 true
z4 instanceof Bmw; // true

// closure를 이용해서 은닉화
// 변수에 직접 접근하지 않고 함수를 통해 접근
// 값을 가져올 수는 있지만 바꿀 수는 없다
const Bmw = function (color) {
    const c = color;
    this.getColor = function () { 
        console.log(c);
    };
};

const x5 = new Bmw("red");