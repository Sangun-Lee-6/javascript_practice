
// /* (1) */
// // 결과가 Promise의 인스턴스임 확인
// console.log(
//   fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
// );

// fetch('https://showcases.yalco.kr/javascript/mockserver/race-result')
// .then(response => {
//   // console.log(response);
//   return response;
// })
// .then(response => response.json())
// .then(console.log);

// /* (2) */
// fetch('https://WRONG-ADDRESS')
// .then(response => response.json())
// .then(console.log)
// .catch(msg => {
//   console.error(`에러 발생: ${msg}`)
// })
// .finally(() => {
//   console.log('- - 통신 종료 - -')
// })

// /* (3) */
// const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';

// fetch(SERVER_URL + 'race-result')
// .then(response => response.json())
// .then(console.log)
// .catch(console.error);

// [1, 2, 3, 4, 5].forEach(item => {
//   fetch(`${SERVER_URL}runners/${item}`)
//   .then(response => response.json())
//   .then(console.log)
//   .catch(console.error);
// });

// [1, 2, 3].forEach(item => {
//   fetch(`${SERVER_URL}schools/${item}`)
//   .then(response => response.json())
//   .then(console.log)
//   .catch(console.error);
// });

// /* (4) */
// const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';

// fetch(SERVER_URL + 'race-result')
// .then(result => result.json())
// .then(arry => {
//   return arry.sort((a, b) => {
//     return a.record - b.record
//   })[0].runner_idx
// })
// .then(winnerIdx => {
//   return fetch(`${SERVER_URL}runners/${winnerIdx}`)
// })
// .then(result => result.json())
// .then(({school_idx}) => school_idx)
// .then(schoolIdx => {
//   return fetch(`${SERVER_URL}schools/${schoolIdx}`)
// })
// .then(result => result.json())
// .then(console.log)
// .catch(console.error);

/* (5) */
const SERVER_URL = 'https://showcases.yalco.kr/javascript/mockserver/';

async function getWinnersSchool () {

  const raceResult = await fetch(SERVER_URL + 'race-result')
  .then(result => result.json());

  const winnerIdx = raceResult
  .sort((a, b) => {
    return a.record - b.record
  })[0].runner_idx;

  const winnerInfo = await fetch(`${SERVER_URL}runners/${winnerIdx}`)
  .then(result => result.json());

  const schoolIdx = winnerInfo.school_idx;

  const schoolInfo = await fetch(`${SERVER_URL}schools/${schoolIdx}`)
  .then(result => result.json());

  console.log(schoolInfo);
}

getWinnersSchool();