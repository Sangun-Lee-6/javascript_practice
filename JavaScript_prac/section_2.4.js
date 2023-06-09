// 1.1
const food1 = {
  name: '햄버거',
  price: 8000,
  vegan: false
};

console.log(food1);

// 1.2
console.log(
  food1.price,  // 마침표 프로퍼티 접근 연산자
  food1['vegan']  // 대괄호 프로퍼티 접근 연산자
);

// 1.3
const workout = {};   // 빈 객체 생성
console.log(workout);

// 객체에 프로퍼티 추가
workout.bench = 70;
workout.time = '60 min';
workout['place'] = 'Jungle Gym';

console.log(workout);

// 프로퍼티 수정
workout.bench = 100;
workout.time = '40 min + shower time';

console.log(workout);

// 1.4
const obj = {
  1 : '하나',   // 숫자도 객체의 키로 사용 가능
  'ab-cd': 'ABCD',   // 문자를 포함한다면 따옴표로 감싸야함
  's p a c e': 'SPACE'
};

console.log(obj);

// 대괄호 프로퍼티 접근 연산자로만 접근 가능
console.log(
  obj[1],
  obj['s p a c e']
);

// 에러 발생
// console.log(
//   obj.1
// );

// 1.5
let idx = 0;
const obj_1 = {
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  ['key-' + ++idx]: `value-${idx}`,
  [idx**idx]: 'POWER'
};

console.log(obj_1);

// 1.6
const objKey = {x: 1, y: 30};
const arrKey = [1,2,3,4,5];

const obj_2={
  [objKey]: '객체를 키값으로',
  [arrKey]: '배열을 키값으로'
};

console.log(obj_2);

// 내용이 전혀 다른 객체, 그저 type 만 같음
console.log(obj_2[{z : 100}]);
// 숫자가 아닌 문자열
console.log(obj_2['1,2,3,4,5']);

