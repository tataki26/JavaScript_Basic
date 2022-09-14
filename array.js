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