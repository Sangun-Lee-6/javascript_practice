/* iframe 으로 감싸진 경우(ex. 네이버 블로그) */
/* 왜 이런 방식으로 해야하는지 공부 필요 */

const axios = require("axios");
const cheerio = require("cheerio");

async function deleteIframe(url) {
  try {
    const headers = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
    };

    const response = await axios.get(url, { headers });
    const html = response.data;
    const $ = cheerio.load(html);

    const srcUrl = "https://blog.naver.com/" + $("iframe").attr("src");
    
    return srcUrl;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

const url = "https://blog.naver.com/yuio234/222973559593";
let srcUrl;

deleteIframe(url)
  .then(result => {
    srcUrl = result;
    getHtml(srcUrl);
  })
  .catch(error => console.error(error));

async function getHtml(srcUrl) {
  try {
    const html = await axios.get(srcUrl);

    const $ = cheerio.load(html.data);
    const title = $("span#SE-FDC07B70-E54B-41BF-8CEA-A86512DB0CE8").text();
    console.log(title);
  } catch (error) {
    console.error(error);
  }
}
