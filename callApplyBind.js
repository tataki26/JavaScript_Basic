// 함수 호출 방식과 관계 없이 this를 지정할 수 있음

//
// call
//

// 모든 함수에서 사용 가능
// this를 특정 값으로 지정 가능

const mike = { name: "Mike", };
const tom = { name: "Tom", };

function shoWThisName() {
    console.log(this.name); // this = window
};

shoWThisName(); // window.name --> ""
// 첫번째 인자: this로 사용할 객체
// 다음 인자: 함수에서 사용될 매개변수
// 해당 함수가 주어진 함수의 메서드인 것처럼 사용 가능
shoWThisName.call(mike); // "Mike"

function update(birthYear, occupation){
    this.birthYear = birthYear; 
    this.occupation = occupation;
};

update.call(mike, 1999, 'singer'); // this = mike
update.call(tom, 1987, 'programmer'); // this = tom
// 결과
/*
{ name: "Mike", birthYear: 1999, occupation: "singer" }
{ name: "Tom", birthYear: 1987, occupation: "programmer" }
*/

//
// apply
//

// 함수의 매개변수를 처리하는 방법만 제외하면, call과 완전히 같은 기능
// call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만,
// apply는 매개변수를 배열로 받는다
update.apply(mike, [1999, 'singer']); // this = mike
update.apply(tom, [1987, 'programmer']); // this = tom

// 배열 요소를 함수의 매개 변수로 사용할 때 유용
const nums = [3,10,1,6,4];

// 배열 째로 넣으면 에러
// 하나씩 풀어서 넣어야 함
// const minNum = Math.min(...nums);
// const maxNum = Math.max(...nums);

// 같은 코드
// this가 필요하지 않은 코드이므로 null 대입
const minNum = Math.min.apply(null, nums); // 1
const maxNum = Math.max.apply(null, nums); // 10

// 같은 코드
// const minNum = Math.min.call(null, ...nums);
// const maxNum = Math.max.call(null, ...nums);

//
// bind
//

// 함수의 this 값을 영구히 바꾸기
const updateMike = update.bind(mike);

updateMike(1980, 'police');
// 결과
// { name: "Mike", birthYear: 1980, occupation: "police" }

const user = {
    name: 'Mike',
    showName: function () {
        console.log(`hello, ${this.name}`);
    },
};

// 메서드는 점 앞이 this
user.showName(); // hello, Mike

let fn = user.showName();
fn(); // fn에 할당하면서 this를 잃어버림(호출 시에 this 없이 실행했기 때문), 아무 것도 출력 안 함
fn.call(user); // hello, Mike
fn.apply(user); // hello, Mike

let boundFn = fn.bind(user);
boundFn(); // hello, Mike