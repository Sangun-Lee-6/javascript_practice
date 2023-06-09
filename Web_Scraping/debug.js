const axios = require("axios");
const cheerio = require("cheerio");

async function getBlogContent(srcUrl) {
  try {
    const response = await axios.get(srcUrl);
    const $ = cheerio.load(response.data);
    const title = $('.pcol1').find('.se-fs-.se-ff-').text();
    const content = $('.se-text-paragraph.se-text-paragraph-align-center').find('.se-fs-.se-ff-').text();
    const blogData = {
      title: title,
      content: content,
    };
    return blogData;
  } catch (error) {
    console.error('블로그 본문 가져오기 오류:', error);
    return null;
  }
}

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


async function summarizeContent(content) {
  try {
    const apiKey = "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"; 
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    };
    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `아래 리뷰를 다 읽고 요약해서 1줄로 알려줘:\n${content}`
        }
      ]
    };

    const response = await axios.post(apiUrl, requestBody, { headers });
    const summary = response.data.choices[0].message.content;

    return summary;
  } catch (error) {
    console.error("Failed to summarize reviews:", error.response.data);
    return null;
  }
}

async function crawlAndSummarizeBlog(url) {
  const content = await getBlogContent(url);
  if (content) {
    const summary = await summarizeContent(content.content);
    console.log('블로그 본문 요약:', summary);
  }
}

const url = 'https://blog.naver.com/yuio234/222973559593';
let srcUrl;

deleteIframe(url)
  .then(result => {
    srcUrl = result;
    crawlAndSummarizeBlog(srcUrl);
  })
  .catch(error => console.error(error));
