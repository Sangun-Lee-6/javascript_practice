// /* (1) async 함수 */
// function getMult10Promise (number) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(number * 10);
//     }, 1000);
//   });
// }

// async function doAsyncWorks () {
//   const result1 = await getMult10Promise(1);
//   console.log(result1);

//   const result2 = await getMult10Promise(2);
//   console.log(result2);

//   const result3 = await getMult10Promise(3);
//   console.log(result3);
// }

// doAsyncWorks();
// console.log('이 문구가 먼저 출력됨');

// /* (2) 예제 */

// // 빌린 금액으로 약속을 하는 함수
// function moneyLend (borrow) {
//   return new Promise((resolve, reject) => {
//     console.log(`채무 ${borrow}만원`);

//     setTimeout(() => {
//       if (Math.random() < 0.1) {
//         reject('채무자 파산');
//       }

//       resolve(borrow * 1.1);
//     }, 1000);
//   });
// }
// // 아래 코드는 then 보다 훨씬 깔끔함
// async function lend5times () {
//   try {
//     const lend1 = await moneyLend(20);
//     const lend2 = await moneyLend(lend1);
//     const lend3 = await moneyLend(lend2);
//     const lend4 = await moneyLend(lend3);
//     const lend5 = await moneyLend(lend4);

//     console.log(`반납 ${lend5}만원`);
//   } catch (msg) {
//     console.error(msg);
//   } finally{
//     console.log('- - 대금업 종료 - -');
//   }
// }
// lend5times();

/* (3) 예제 */

const DEADLINE = 1400;

function getRelayPromise (name, start, failMsg) {
  console.log(`${name} 출발`);

  // 💡 랜덤 시간만큼 달리고 결과를 반환하겠다는 약속을 만들어 반환
  return new Promise((resolve, reject) => {
    const time = 1000 + Math.random() * 500;

    setTimeout(() => {
      if (time < DEADLINE) {
        console.log(`${name} 도착 - ${(start + time)/1000}초`);
        resolve(start + time);

      } else {
        console.log(failMsg);
        reject((start + time) / 1000);
      }
    }, time);
  })
}
async function relay5 () {
  try {
    const time1
     = await getRelayPromise('철수', 0, '철수부터 광탈입니다. ㅠㅠ');

    const time2
     = await getRelayPromise('영희', time1, '영희가 완주하지 못했네요.');

    const time3
     = await getRelayPromise('돌준', time2, '돌준이 분발해라.');

    const time4
     = await getRelayPromise('정아', time3, '정아에게 무리였나보네요.');

    const time5
     = await getRelayPromise('길돈', time4, '아아, 아깝습니다...');

  } catch (msg) {
    console.log(`완주 실패 - ${msg}초`);
  } finally {
    console.log('- - 경기 종료 - -');
  }
}
relay5();