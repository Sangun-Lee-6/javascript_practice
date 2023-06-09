

const axios = require("axios");
const cheerio = require("cheerio");

const getHome = async () => {
  try {
    const html = await axios.get("https://m.place.naver.com/restaurant/19494091/home");
    const $ = cheerio.load(html.data);
    
    const address = $("span.LDgIH").text();
    console.log("address :",address);

    // Error : TimeList 에 아무것도 담기지 않음
    let TimeList = [];
    const bodyList1 = $("span.A_cdD");
    bodyList1.map((i, element) => {			
      TimeList[i] = {
        
        day_of_week : $(element).find("span.i8cJw").text(),
        time : $(element).find("div.H3ua4").text()
      };
    });
    console.log(TimeList);
  } 
	catch (error) {
    console.error(error);
  }
};

const getReview = async () => {
  try {
    const html = await axios.get("https://m.place.naver.com/restaurant/19494091/review/visitor");
    const $ = cheerio.load(html.data);
    
    const grade = $("span.m7jAR.ohonc em").text().replace(/\s/g, "");
    console.log("grade :",grade);
    
    let ReviewList = [];
    const bodyList2 = $("span.zPfVt");
    bodyList2.map((i, element) => {			
      ReviewList[i] = {
        review : $(element).text()
      };
    });
    console.log(ReviewList);

  } 
	catch (error) {
    console.error(error);
  }
};

getHome();
getReview();