const axios = require("axios");
const cheerio = require("cheerio");

const url = 'https://www.bestbuy.com/site/asus-rog-zephyrus-16-fhd-165hz-gaming-laptop-intel-core-i7-16gb-ddr5-memory-nvidia-geforce-rtx-3060-512gb-pcie-4-0-ssd-off-black/6494642.p?skuId=6494642'

async function scrape()
{
    const {data} = await axios.get(url);
    console.log(data);
}

scrape();