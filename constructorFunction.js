// 객체 리터럴
let user = {
    name: 'Mike',
    age: 30,
};

// 생성자 함수
// 클래스와 유사한 개념
// 첫 글자는 대문자로 -> 일반 함수도 new만 붙이면 동일하게 동작하기 때문에 구분을 위한 장치
function User(name, age){
    
    // new 함수명(); 실행 시,

    // 1) 빈 객체를 만들고 this에 할당
    // this = {};
    
    // 2) 함수를 실행하면서 프로퍼티 할당
    this.name = name;
    this.age = age;
    this.sayName = function(){
        console.log(this.name);
    };

    // 3) this 반환
    // return this;
};

// new 연산자를 사용해서 호출
let user1 = new User('Henry', 20);
let user2 = new User('Tomas', 35);
let user3 = new User('Jane', 22);

user3.sayName(); // this = user5

//
// 예제
//

function Item(title, price){
    this.title = title;
    this.price = price;
    this.showPrice = function(){
        console.log(`가격은 ${price}원입니다.`);
    }
};

// new를 빼면 undefined 반환
const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 4000);
const item3 = new Item("지갑", 9000);

console.log(item1, item2, item3);

item3.showPrice();