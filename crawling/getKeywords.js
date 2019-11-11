const axios = require("axios");
const cheerio = require("cheerio");

const getHTML = async url => {
  try {
    return await axios.get(
      "https://sports.news.naver.com/wfootball/news/index.nhn?isphoto=N"
    );
  } catch (e) {
    console.error(e);
  }
};
const getTitles = html => {
  const $ = cheerio.load(html.data);
  const $bodyList = $("div.text").children("a.title");
  const titleList = [];
  $bodyList.each(function(i) {
    // 화살표 함수 x, function으로 쓰자
    titleList[i] = $(this).text();
  });
  return titleList;
};
(async () => {
  const html = await getHTML();
  const titles = getTitles(html);
  const map = {};
  //  console.log(titles);
  titles.forEach(title => {
    const spread = title.split(" ");
    spread.forEach(word => {
      if (!map[word]) map[word] = 1;
      else map[word] = map[word] + 1;
    });
  });
  const sorted = [];
  for (const word in map) {
    const count = map[word];
    sorted.push({ word, count });
  }
  sorted.sort((a, b) => b.count - a.count);
  console.log(sorted);
})();
