const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.bestbuy.com/site/asus-rog-zephyrus-16-fhd-165hz-gaming-laptop-intel-core-i7-16gb-ddr5-memory-nvidia-geforce-rtx-3060-512gb-pcie-4-0-ssd-off-black/6494642.p?skuId=6494642"

const product = {Name: "", Price: "", Link: ""};

async function scrape()
{
    product.Link = url;
    //gathers HTML data from URL
    const {data} = await axios.get(url);
    //load HTML
    const $ = cheerio.load(data);
    const item = $("div#pl-page-content");
    //extract specific data we want
    product.Name = $(item).find("div h1#heading-5 v-fw-regular").text();
    const price = $(item).find("span .pricing-price__regular-price-content--block pricing-price__regular-price-content--block-mt").text();

    console.log(product.Name);
}

scrape();
