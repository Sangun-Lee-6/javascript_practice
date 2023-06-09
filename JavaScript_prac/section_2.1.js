// ====Lesson 1. 자료형-데이터의 종류====
// JavaScript 의 primitive data types
const a = true, b = 104, c = 'hello';
// 어쩌라고?

/* typeof */

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

let d;
console.log(d, typeof d);

let e = null;
console.log(e, typeof e);

let f = Symbol('hello');
console.log(f, typeof f);

/* boolean */
let isMarried = true;
console.log('결혼했음 :',isMarried);

const res = 10>15;
console.log(res, typeof res);

/* number */

let age = 100;
let score = 80.5;
let cnt = -10;

console.log(age,typeof age, score,typeof score, cnt,typeof cnt);

/* string */

let first_name = 'Spencer';
console.log(first_name);
console.log(typeof first_name);
console.log(typeof(typeof cnt));    // typeof cnt = 'number', 따라서 typeof 'number' 는 string



/* undefined */

let x;
console.log(x, typeof x);

// 아무것도 반환하지 않을 때 undefined 를 return

/* null */

let y;
console.log('값을 넣기 전 :', y);

y = null;
console.log('값을 넣은 후 :', y);

// typeof null 이 object 인 것은 초기 js 설계 오류
let z = null;
console.log(typeof null, typeof z);
// 따라서 null 여부는 type 이 아닌, 아래와 같이 확인할 것
console.log(z === null);

