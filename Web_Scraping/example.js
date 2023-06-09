// (1) axios 모듈 가져오기 : HTTP 요청을 보내는 모듈
const axios = require("axios");
// (2) cheerio 모듈 가져오기 : HTML 문서를 파싱하고 조작하는 모듈
const cheerio = require("cheerio");

// (3) getHTML 함수 : 비동기 함수, HTML 데이터를 가져오는 역할
const getHtml = async () => {
  try {
		// (4) URL을 이용해서 서버로 GET 요청을 보내고 → HTTP 응답 객체를 ‘변수 html’ 에 저장
    const html = await axios.get("https://www.genie.co.kr/chart/top200");
		// (5) 웹 스크래핑 결과를 저장하기 위한 배열 ulList
    let ulList = [];
		// (6) cheerio.load 를 이용해서 ‘변수 $’에 HTML 저장
		// html.data 는 HTTP 응답 객체의 Response body
    const $ = cheerio.load(html.data);
    // (7) ‘변수 bodyList‘ : 배열 / 크롤링할 HTML 요소들을 감싸고 있는 부모 요소
		// HTML 중 모든 <tr class = "list"> 를 배열의 원소로 저장
    const bodyList = $("tr.list");
		// (8) 배열의 각 원소(여기선 tr.list)에 대해 콜백 함수 실행
    bodyList.map((i, element) => {
			// (9) bodyList 가 배열이므로 각 원소 결과를 저장하는 ulList 도 배열
			// ulList 의 각 원소에 bodyList 배열 원소를 처리 후 저장
      ulList[i] = {
				// (10) rank : 배열의 인덱스 + 1 로 순위 정보 저장
        rank: i + 1,
				// (11) 요소 중 td.info 안에 a.title 의 텍스트를 공백 제거해서 저장
        title: $(element).find("td.info a.title").text().replace(/\s/g, ""),
        artist: $(element).find("td.info a.artist").text().replace(/\s/g, ""),
      };
    });
		// (12) ulList 출력
    console.log("bodyList : ", ulList);
  } 
	// (13) 에러 발생 시, error 출력
	catch (error) {
    console.error(error);
  }
};

getHtml();