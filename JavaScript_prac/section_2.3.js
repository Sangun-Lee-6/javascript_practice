// 문자열 - 텍스트 데이터

/* 문자열 기본 표기 방법 */

// (1) 작은따옴표

let word = 'Spencer';
console.log(word);

// (2) 큰따옴표

let word2 = "Lee"
console.log(word2);

// javascript 에서는 큰따옴표, 작은따옴표 구분 없음

// (3) 문자열 안에 따옴표 사용 : \

let word3 = 'sunday \'morning\''
console.log(word3);

// (4) 이스케이프 표현

let hello = '안녕하세요\t반갑습니다\n우리는 \'배치기\'입니다.';
console.log(hello);

// (5) 긴 문자열을 여러 줄에 표현 : for 가독성 

let longSentence = 'aaaaaaaaaaaaaaaaaa \
bbbbbbbbbbbbbbbb \
cccccccccccccccc'
console.log(longSentence);



/* 백틱 */

// (1) 백틱 기본 사용 : 문자열처럼 사용

let word4 = `hello jungle`;
console.log(word4);

// (2) 백틱 안에서는 탭과 줄바꿈을 이스케이프 표현 없이 그대로 표현됨

let word5 = `안녕하세요 반갑습니다
우리는 '배치기'입니다.`
console.log(word5);

// (3) 백틱과 ${상수, 변수, 표현식}

let word6 = `name : ${word}, surname : ${word2}, age : ${10+19}`
console.log(word6);