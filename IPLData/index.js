const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const xlsx = require("xlsx");
const fs = require("fs");

const PAGE_URL = "https://www.iplt20.com/stats/";

const fetchIPLStats = async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(PAGE_URL, { waitUntil: "networkidle2" });

  const seasons = ["2020", "2021", "2022", "2023", "2024"];
  const results = [];

  for (const season of seasons) {
    await page.click(".cSBDisplay"); // Adjust selector as needed

    // Wait for the dropdown list to appear
    await page.waitForSelector(".cSBList");

    // Click the desired season
    await page.evaluate((season) => {
      const items = Array.from(document.querySelectorAll(".cSBListItems"));
      const target = items.find(
        (item) => item.getAttribute("data-val") === season
      );
      if (target) target.click();
    }, season);

    // Wait for the page to update after the click (adjust timeout if necessary)
    function delay(time) {
      return new Promise((resolve) => setTimeout(resolve, time));
    }
    await delay(2000);

    // Get the updated page content
    const content = await page.content();

    const fileName = `Season_${season}.txt`;
    fs.writeFileSync(fileName, content, "utf-8");
    console.log(`HTML saved to ${fileName}`);

    const savedHtml = fs.readFileSync(fileName, "utf-8");
    const $ = cheerio.load(savedHtml);

    // Extract the desired data
    const data = [];
    const rows = $("tr").not(".st-table__head");
    rows.each((i, elem) => {
      // Replace '.data-item-selector' with actual selector
      data.push({
        Season: `Season ${season}`,
        Name: $(elem).find(".st-ply-name").text(),
        Team: $(elem).find(".st-ply-tm-name").text(),
        Runs: $(elem).find(".np-tableruns").text(),
      });
    });

    results.push({ season, data });

    const JSONFileName = `Season_${season}.txt`;
    fs.writeFileSync(JSONFileName, JSON.stringify(data), "utf-8");
    console.log(`HTML saved to ${JSONFileName}`);

    const excelFileName = `Season_${season}.xlsx`;
    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "ScrapedData");
    xlsx.writeFile(workbook, excelFileName);
    console.log(`Data saved to ${excelFileName}`);
  }

  fs.writeFileSync("Season.txt", JSON.stringify(results), "utf-8");
  console.log(`HTML saved to Season.txt`);

  await browser.close();
};

fetchIPLStats();
