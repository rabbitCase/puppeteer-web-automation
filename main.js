const puppeteer = require('puppeteer');

(async () =>{
    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();

    await page.goto('https://amazon.in/');
    await page.setViewport({width: 1080, height: 1024});

    await page.type('#twotabsearchtextbox', 'electric guitar');
    const searchButton = '#nav-search-submit-button';
    await page.click(searchButton);

    const sortButton = '#a-autoid-0-announce';
    const sortByPrice = '#s-result-sort-select_1';

    await page.waitForSelector(sortButton);
    await page.click(sortButton);

    await page.waitForSelector(sortByPrice);
    await page.click(sortByPrice);

    await new Promise(res => setTimeout(res, 4000));
    await browser.close();
})();