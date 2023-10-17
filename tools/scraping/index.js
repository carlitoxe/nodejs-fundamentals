const puppeteer = require('puppeteer');

(async () => {
    console.log('Launching browser!');
    const browser = await puppeteer.launch({ headless: false });

    const page = await browser.newPage();
    await page.goto('https://en.wikipedia.org/wiki/Node.js');

    let title1 = await page.evaluate(() => {
        const h1 = document.querySelector('h1');
        console.log(h1.innerText);

        return h1.innerText;
    })  

    console.log('Page title:', title1);

    console.log('Closing browser...');
    browser.close();
    console.log('Browser has been closed');
})()