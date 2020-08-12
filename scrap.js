const request = require('request')
const cheerio = require('cheerio')

request('https://news.ycombinator.com/',(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html)
        const siteHeading = $('.itemlist')
        // console.log(siteHeading.text())

        const output = siteHeading.find('a').text()
        // console.log(output)
        const ats = siteHeading.find('a').attr('href')
        console.log(ats)
    }
});
