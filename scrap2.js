const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')

const writeStream = fs.createWriteStream('post.csv')
writeStream.write(`Title,Link \n`)
request('https://news.ycombinator.com/',(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html)
        const siteHeading = $('.itemlist')
        // console.log(siteHeading.text())

        // const output = siteHeading.find('a').text()
        // // console.log(output)
        // const ats = siteHeading.find('a').attr('href')
        // console.log(ats)
        $('.athing').each((i,el) => {
            const title = $(el).find('a').text()
            // console.log(title)
            const link = $(el).find('a').attr('href')
            writeStream.write(`${title},${link} \n`)
            // console.log(link)
            // const date = $(el).find('.age').children('a').text()
            // console.log(date)
        })
        console.log('scrapind done')
    }
});
