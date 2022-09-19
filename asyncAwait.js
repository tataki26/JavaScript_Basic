// async... await의 사용 목적
// 가독성 좋은 코드 작성


//
// async
//

async function getName() {
    // return "Mike";
    // return Promise.resolve("Tom");
    throw new Error("err..."); 
};

// async의 return은 promise
// console.log(getName()); // Promise { fulfiled: "Mike" }

/*
getName().then((name) => {
    console.log(name); // "Mike" // "Tom"
});
*/

getName().catch((err) => {
    console.log(err); // Error: err...
});

//
// await
//

function getName(name){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(name);
        }, 1000);
    });
};

// await은 async 내부에서만 사용 가능
// await 다음에는 promise가 오고 promise가 처리될 때까지 대기
// await을 사용하지 않으면, then을 사용해야 한다
async function showName(){
    // result에는 getName에서 resolve한 값이 들어간다
    const result = await getName('Mike');
    console.log(result); // 1초 후 'Mike'
};

console.log("시작");
showName(); // Mike

//
// 사용 예시
//

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

// promise... then보다 가독성이 좋다
console.log("시작");

async function order(){
    try{
        const result1 = await f1();
        const result2 = await f2(result1);
        const result3 = await f3(result2);
        console.log(result3);
    } catch (e) {
        console.log("종료"); // 에러 로그를 찍고 종료
    }
};

order();

// promise all
console.log("시작");

async function order(){
    try{
        const result = await Promise.all([f1(),f2(),f3()]);
        console.log(result);
    } catch (e) {
        console.log("종료"); // 에러 로그를 찍고 종료
    }
};

order();