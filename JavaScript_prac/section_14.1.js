// /* (1) 이 안에 setTimeout 이 있는 것 확인 */
// console.log(globalThis);

// /* (2) 콜백함수 실행  */
// setTimeout(() =>{
//   console.log('타임아웃!!!');
// }, 1000);
// // 1000ms, 즉 1초 후에 콜백함수가 실행됨

// /* (3) 비동기 코드 */
// console.log('첫 번째 console');

// setTimeout(() =>{
//   console.log('두 번째 console');
// }, 1000);  // 1000 을 0으로 바꿔서 실행해보기

// console.log('세 번째 console');
// // 0으로 바꿔도 두 번째 console 은 제일 마지막에 출력됨(∵이벤트 루프)

// /* (4) 예제 : 달리기 경주 */
// // 1초 ~ 1.5초 사이 무작위 시간 안에 도착
// function doRace (num, name) {
//   console.log(`${num}번 ${name} 출발`);

//   setTimeout (() => {
//     console.log(`${num}번 ${name} 도착`);
//   }, 1000 + Math.random() * 500);
// }

// '철수,영희,돌준,정아,길돈'
// .split(',')
// .forEach((itm, idx) => doRace(++idx, itm));
// console.log('----결승선----');
