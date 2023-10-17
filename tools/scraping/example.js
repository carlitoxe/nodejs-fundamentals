const puppeteer = require("puppeteer");
const link = "https://platzi.com/blog/que-es-platzi-master/";

(async function browser() {
  console.log("Launching browser");
  const browser = await puppeteer.launch({ headless: false });

  const page = await browser.newPage();
  await page.goto(link);

  const commentsText = await page.evaluate(() => {
    const comments = document.querySelectorAll(".CommentContent-text p");
    const listOfComments = [];
    comments.forEach((comment) => {
      listOfComments.push(comment.textContent);
    });
    return listOfComments;
  });

  console.log('Closing browser...');
  browser.close();
  console.log('Browser has been closed');

  console.log(commentsText);
  console.log(commentsText.length);
})();
