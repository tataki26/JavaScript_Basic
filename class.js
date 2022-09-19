// 생성자 함수
const User = function (name, age) {
    this.name = name;
    this.age = age;
    // 객체 내부에 showName 존재
    /*
    this.showName = function () {
        console.log(this.name);
    };
    */
};

const mike = new User("Mike", 30);

// 정상 동작 - undefined
// 에러 발견하기 어려움
// const mike = User("Mike", 30);

// class처럼 __proto__ 내부에 저장하려면?
User.prototype.showName = function () {
    console.log(this.name);
};

//
// class
//

// es6에 추가된 스펙

class User2 {
    // 생성자
    // 객체 초기화
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // __proto__ 내부에 showName 존재
    // 프로토타입에 저장
    showName() {
        console.log(this.name);
    }
}

const tom = new User2("Tom", 19);

// 타입 에러
// new 없이 인스턴스 생성 불가능
// const tom = User2("Tom", 19);

// 두 인스턴스의 __proto__ 비교
// mike는 constructor에 함수(f (name, age))
// tom은 constructor에 클래스 명시(class User2)

for(const p in mike){
    console.log(p);
};

// 결과
/*
"name"
"age"
"showName"
*/

// 클래스의 메서드는 제외됨
for(const p in tom){
    console.log(p);
};

// 결과
/*
"name"
"age"
*/

//
// 상속
//

// extends 키워드 사용
class Car{
    constructor(color){
        this.color = color;
        this.wheels = 4;
    }
    drive() {
        console.log("drive..");
    };
    stop() {
        console.log("STOP!!");
    };
};

class Bmw extends Car {
    /*
    // 상속 시, 부모 클래스를 한 번 호출해야 한다
    // constructor가 없을 때는 자동으로 다음과 같이 동작
    constructor(...args) {
        super(...args);
    } 
    */
    park() {
        console.log("PARK");
    };
};

const z4 = new Bmw("blue");

z4.stop(); // STOP!!

// 결과
// 클래스 내부에서 선언한 메서드는 __proto__에 존재
// __proto__: Car
// ...park: f park()...
// ...__proto__: Object
// ...drive: f drive()...
// ...stop: f stop()...

//
// method overriding
//

class Audi extends Car {
    park() {
        console.log("PARK");
    };
    // 부모 클래스의 메서드와 동일한 메서드 존재하면 덮어쓰기
    stop() {
        // 부모 클래스의 메서드를 그대로 받아와 확장하고 싶을 때
        super.stop(); // STOP!!
        console.log("OFF"); // OFF
    };
};

//
// constructor overriding
//

class Benz extends Car {
    constructor(color) {
        // 상속 받는 클래스는 생성자 과정(빈 객체 생성 후 this 할당)이 생략된다
        // 따라서, 부모 클래스의 constructor를 실행해야 한다
        super(color);
        this.navigation = 1;
    }
    park() {
        console.log("PARK");
    };
};