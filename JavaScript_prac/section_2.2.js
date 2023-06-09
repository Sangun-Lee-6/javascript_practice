// 자료형과 정적, 동적 타입

/* 예제 코드 */

let job = 'student';
let age = 29;

console.log(job, age);
console.log(typeof age);

age = '이십구';
console.log(typeof age);

// 주어진 문자열을 대문자로 바꾸는 함수
// 다른 자료형에 대한 예외처리 없음
function getUpperCase(str) {
  return str.toUpperCase();
}

console.log(getUpperCase('hello'));
// C 와 같은 컴파일 언어에서는 아래와 같은 컴파일이 되지 않음, 그러나 javascript 와 같은 인터프리터 언어는 사용자에서 에러 발생
console.log(getUpperCase(10));