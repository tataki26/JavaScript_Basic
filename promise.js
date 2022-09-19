// 물건이 만들어질 때까지 일일히 질문하고 응답을 받는 것은 비효율적
// 전화번호를 받고 물건이 완성되면 전화를 주는 것이 더 효율적

//
// promise
//

// 비동기 처리: 특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행
// 비동기 메서드에서 동기 메서드처럼 값을 반환할 수 있다
// 최종 결과를 반환하는 것이 아닌 미래의 어떤 시점에 결과를 제공하겠다는 약속(전화)을 반환한다

// 왜 필요할까?
// 서버에서 받아온 데이터를 화면에 표시할 때 사용
// 서버에서 데이터 요청을 할 때 데이터를 받아오기도 전에 데이터를 표시하려고 하면 에러 발생
// 비동기 처리 시, 발생할 수 있는 문제 예방

// new Promise 생성자가 반환하는 promise 객체는 state와 result 프로퍼티를 가진다
// 생성 당시 state는 pending(대기), result는 undefined이다
// resolve가 실행되면 state는 fulfilled, result는 resolve 함수에 전달된 값이다
// reject가 실행되면 state는 rejected, result는 reject 함수에 전달된 error이다

// callback 함수: 어떤 일이 완료되고 실행되는 함수
// 콜백 함수를 사용하면 특정 로직이 끝났을 때 원하는 동작을 실행시킬 수 있다
// 물건이 완성되었다는 전화를 받는 시점 = 콜백 함수가 호출되는 시점
// 물건을 찾으러 가기 = 원하는 동작 실행하기

// 매개변수: resolve(성공), reject(실패)
// 두 매개변수 모두 함수
// 판매자 코드
const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('OK'); // 3초 후 fulfilled, result는 'OK'
        // or
        reject(new Error('error..')); // 3초 후 rejected, result는 error
    }, 3000); 
});

// 소비자 코드
/*
// 형식
pr.then(
    function(result){}, // promise 이행 시, 실행
    function(err){} // promise 실패 시, 실행
);

// 같은 코드
pr.then(
    function(result) {}
).catch( // reject일 때만 실행
    function(err){}
)

// 처리가 완료되면 항상 실행되는 구문
+ .finally(
    funcion(){
        console.log('--- 주문 끝 ---');
    }
)

*/
// Promise에 설정된 함수에 따라 동작
// resolve로 정의되었다면 두번째 함수 실행X
pr.then(
    function(result){
        console.log(result + '가지러 가자.');
    },
    function(err){
        console.log('다시 주문해주세요...');
    }
);

//
// 사용 예시
//

const pr = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("OK");
        reject(new Error("err..."));
    }, 1000);
});

console.log("시작");
pr.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}).finally(() => {
    console.log("끝");
});

/*
// 여러 작업 진행
const f1 = (callback) => {
    setTimeout(function () {
        console.log("1번 주문 완료");
        callback();
    }, 1000);
};

const f2 =(callback) => {
    setTimeout(function () {
        console.log("2번 주문 완료");
        callback();
    }, 3000);
};

const f3 =(callback) => {
    setTimeout(function () {
        console.log("3번 주문 완료");
        callback();
    }, 2000);
};

// 콜백 지옥
// 깊이가 깊어지면서 계속해서 callback 호출
// 1번 실행 후, 2번 실행 후, 3번 실행
console.log("시작");
f1(function() {
    f2(function() {
        f3(function() {
            console.log("끝");
        });
    });
});
*/

// 같은 코드
// promise로 구현
const f1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("1번 주문 완료");
        }, 1000);
    });
};

const f2 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("2번 주문 완료");
            // rej("xxx"); // f3에 xxx를 넘기고 종료(finally 실행)
        }, 3000);
    });
};

const f3 = (message) => {
    console.log(message);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("3번 주문 완료");
        }, 2000);
    });
};

// promise chaining
// promise가 계속해서 연결된 것
//console.log("시작");
console.time("시작");
f1()
    .then((res) => f2(res)) // resolve 함수 실행하면서 얻은 res 값을 f2에 넘김
    .then((res) => f3(res))
    .then((res) => console.log(res))
    .catch(console.log) // 에러 처리
    .finally(() => {
        // console.log("끝"); // 마무리
        console.timeEnd("끝"); // 6초
    });


//
// promise all
//

// 함수를 배열로 넘김
// 한꺼번에 시작
// 세 작업이 모두 완료되어야 then 부분 실행
// 에러가 한 번이라도 있으면 아무 것도 실행 않고 undeined
// 하나의 정보라도 누락되면 페이지를 아예 보여주지 말아야할 때 활용
console.time("x"); // 소요시간 check
Promise.all([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x"); // 3초
});

//
// promise.race
//

// 경주
// 하나라도 끝나면 then 실행
// 2번 주문에서 에러가 나더라도 1번 주문이 완료되면 종료되기 때문에 무시됨
// ex:) 용량이 큰 이미지를 로드하는데 그 중 하나라도 완료되면 화면에 띄워야 할 때
console.time("X");
Promise.race([f1(), f2(), f3()]).then((res) => {
    console.log(res);
    console.timeEnd("x");
});