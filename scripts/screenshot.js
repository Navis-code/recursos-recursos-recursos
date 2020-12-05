const resourcesJSON = require("../src/resources/resources.json");
const puppeteer = require("puppeteer");

const capture = async (resourceUrl, resourceName) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(resourceUrl);
  await page.screenshot({
    path: `../src/assets/screenshots/${resourceName}.png`,
  });
  await browser.close();
};

function makeScreenshots(resources) {
  console.log(resources);
  console.log("HOLA");
  resources.forEach((resource) => {
    capture(resource.url, resource.name);
  });
}
makeScreenshots(resourcesJSON);
