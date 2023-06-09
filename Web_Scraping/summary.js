const axios = require("axios");
const cheerio = require("cheerio");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getHome = async () => {
  try {
    rl.question("홈 URL을 입력하세요: ", async (homeUrl) => {
      const homeHtml = await axios.get(homeUrl);
      const $ = cheerio.load(homeHtml.data);
      
      const address = $("span.LDgIH").text();
      console.log("\naddress:", address);
      
      /* 영업시간 정보를 크롤링하지 못함 */
      // let TimeList = [];
      // const bodyList1 = $("span.A_cdD");
      // bodyList1.map((i, element) => {			
      //   TimeList[i] = {
      //     day_of_week: $(element).find("span.i8cJw").text(),
      //     time: $(element).find("div.H3ua4").text()
      //   };
      // });
      // console.log("TimeList:", TimeList);
      
      const reviewUrl = homeUrl.replace("/home", "/review/visitor");
      getReview(reviewUrl);
    });
  } catch (error) {
    console.error(error);
    rl.close();
  }
};

const getReview = async (reviewUrl) => {
  try {
    const reviewHtml = await axios.get(reviewUrl);
    const $ = cheerio.load(reviewHtml.data);
    
    const grade = $("span.m7jAR.ohonc em").text().replace(/\s/g, "");
    console.log("grade:", grade || "없음");
    
    let ReviewList = [];
    const bodyList2 = $("span.zPfVt");
    bodyList2.map((i, element) => {			
      ReviewList[i] = {
        review: $(element).text()
      };
    });
    // console.log("ReviewList:", ReviewList);

    // GPT API에 ReviewList를 보내서 요약 결과 받기
    const summarizedReviews = await summarizeReviews(ReviewList);
    console.log("Summarized Reviews:", summarizedReviews);
    
    rl.close();
  } catch (error) {
    console.error(error);
    rl.close();
  }
};

const summarizeReviews = async (reviews) => {
  try {
    const apiKey = "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"; 
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    };

    const reviewTexts = reviews.map((review) => review.review);

    const requestBody = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `아래 리뷰를 요약해서 1줄로 알려줘:\n${reviewTexts.join("\n")}`
        }
      ]
    };

    const response = await axios.post(apiUrl, requestBody, { headers });
    const summarizedReviews = response.data.choices.map((choice) => choice.message.content.trim());

    return summarizedReviews;
  } catch (error) {
    console.error("Failed to summarize reviews:", error);
    return reviews.map((review) => review.review); // Return original reviews in case of failure
  }
};

getHome();

