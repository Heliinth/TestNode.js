const puppeteer = require('puppeteer')

async function scrape() {
   const browser = await puppeteer.launch({})
   const page = await browser.newPage()

   await page.goto('https://shopee.co.th/product/868934469/22203139798')
   var element = await page.waitForSelector("span[class='KmiQIK']")
   var text = await page.evaluate(element => element.textContent, element)
  // return text;
   console.log(text)
   browser.close()
}
scrape()