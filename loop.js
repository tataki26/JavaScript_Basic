//
// for
//

// 반복 횟수가 명확할 때
for(let i = 1; i <= 10; i++){
    console.log(i);
}

//
// while
//

// 반복 횟수가 명확하지 않을 때
let j = 1;

while(j <= 10){
    console.log(j);
    j++;
}

//
// do while
//

let k = 1;

do{ // 무조건 한 번 실행
    console.log(k);
    k++;
} while (k <= 10); // 조건 통과하면 나머지 실행

//
// break
//

while(true){
    let answer = confirm('계속 할까요?');
    if(!answer){ // 사용자가 취소 누르면 무한 반복 탈출
        break;
    }
}

//
// continue
// 

for(let i = 1; i <= 10; i++){
    if(i%2){ // 홀수는 continue
        continue;
    }
    console.log(i);
}